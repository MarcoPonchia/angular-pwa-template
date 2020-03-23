import { Component, OnInit, Input } from "@angular/core";
import { MessagingService } from "../messaging.service";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent implements OnInit {
  @Input()
  logged: boolean = true;

  message;

  constructor(private firebaseService: MessagingService) {}

  ngOnInit() {
    this.firebaseService.requestPermission();
    this.firebaseService.receiveMessage();
    // this.message = this.firebaseService.currentMessage;
  }
}
