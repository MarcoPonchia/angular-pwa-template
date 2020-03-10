import { Component, OnInit, Input } from "@angular/core";
import { Topic } from "src/app/shared/models/topic.model";

@Component({
  selector: "app-topic-detail",
  templateUrl: "./topic-detail.component.html",
  styleUrls: ["./topic-detail.component.scss"]
})
export class TopicDetailComponent implements OnInit {
  @Input()
  topic: Topic;

  constructor() {}

  ngOnInit() {}
}
