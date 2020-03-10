import { Component, OnInit, Input } from "@angular/core";
import { Topic } from "src/app/shared/models/topic.model";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import * as Selectors from "../store/topics.selectors";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-topic-list",
  templateUrl: "./topic-list.component.html",
  styleUrls: ["./topic-list.component.scss"]
})
export class TopicListComponent implements OnInit {
  topics$: Observable<Topic[]>;
  aligned$: Observable<boolean>;
  selectedTopic: Topic;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.topics$ = this.store.select(Selectors.topics);
    this.aligned$ = this.store.select(Selectors.isAligned);
  }

  selectTopic(topic: Topic) {
    this.selectedTopic = topic;
  }
}
