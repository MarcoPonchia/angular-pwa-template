import { topicsReducer } from "./store/topics.reducer";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TopicsRoutingModule } from "./topics-routing.module";
import { TopicsComponent } from "./topics.component";
import { SharedModule } from "../shared/shared.module";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { TopicsEffects } from "./store/topics.effects";
import { TopicListComponent } from './topic-list/topic-list.component';

@NgModule({
  declarations: [TopicsComponent, TopicListComponent],
  imports: [
    CommonModule,
    SharedModule,

    StoreModule.forFeature("topics", topicsReducer),
    EffectsModule.forFeature([TopicsEffects]),
    TopicsRoutingModule
  ]
})
export class TopicsModule {}
