import { Client } from "./api/client";
import { Department } from "./api/department";
import { User } from "./api/user";
import { Message } from "./api/message";
import { Auth } from "./api/auth";
import { Media } from "./api/media";
import { Extcontact } from "./api/extcontact";

interface IOption {
  host?: string;
  appKey: string;
  appSecret: string;
}

/*
 * 钉钉 SDK
 * @type {DingTalk}
 */
export class DingTalk {
  user: User;
  auth: Auth;
  media: Media;
  client: Client;
  message: Message;
  extcontact: Extcontact;
  department: Department;

  constructor(options: IOption) {
    options.host = options.host || "https://oapi.dingtalk.com";
    this.client = new Client(options);
    this.department = new Department(this.client);
    this.user = new User(this.client);
    this.message = new Message(this.client);
    this.media = new Media(this.client, options);
    this.auth = new Auth(this.client);
    this.extcontact = new Extcontact(this.client);
  }
}
