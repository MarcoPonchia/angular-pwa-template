import { ActiveModel } from "./active.interface";

export class DeviceInfo extends ActiveModel {
  token: string;
  info: any;
}
