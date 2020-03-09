import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TopicsComponent } from "./topics.component";
import { TopicListComponent } from "./topic-list/topic-list.component";

const routes: Routes = [
  {
    path: "",
    component: TopicsComponent,
    children: [{ path: "list", component: TopicListComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopicsRoutingModule {}
