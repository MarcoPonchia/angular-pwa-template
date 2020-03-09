import { ActiveModel } from "./active.interface";

export class Post extends ActiveModel {
  authorId: string;
  subtitle: string;
  description?: string;
}
