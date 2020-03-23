import { ActiveModel } from "./active.interface";
import { DeviceInfo } from "./device-info";

export class User extends ActiveModel {
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  roles: string[];
  companyId: string;
  deviceInfo: DeviceInfo;

  constructor(object: any) {
    super(object);
    if (object) {
      console.log(object);

      this.deviceInfo = object.deviceInfo && new DeviceInfo(object.deviceInfo);
    }
  }

  get fullName() {
    return [this.firstName, this.lastName].filter(s => !!s).join(" ");
  }
}
