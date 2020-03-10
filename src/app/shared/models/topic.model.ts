import { ActiveModel } from "./active.interface";
import { Post } from "./post.model";

export class Topic extends ActiveModel {
  title: string;
  companyId: string;
  posts?: Post[];

  constructor(object: any) {
    super(object);
    if (object) {
      this.posts = object.posts && object.posts.map(p => new Post(p));
    }
  }

  get postsSummary(): string {
    return this.posts.map(p => p.subtitle).join(", ");
  }
}
