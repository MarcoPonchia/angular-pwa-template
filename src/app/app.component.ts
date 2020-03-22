import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { MessagingService } from "./shared/messaging.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "angular-pwa-template";
  message;

  constructor() {}
}
