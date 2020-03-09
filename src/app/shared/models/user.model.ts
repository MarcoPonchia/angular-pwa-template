import { ActiveModel } from "./active.interface";

export class User extends ActiveModel {
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  roles: string[];
  companyId: string;

  get fullName() {
    return [this.firstName, this.lastName].filter(s => !!s).join(" ");
  }
}
