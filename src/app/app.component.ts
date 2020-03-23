import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { MessagingService } from "./shared/messaging.service";

import { DeviceDetectorService } from "ngx-device-detector";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "angular-pwa-template";
  showDeviceInfo = false;
  message;

  constructor(private deviceService: DeviceDetectorService) {
    this.message = this.deviceService.getDeviceInfo();
    console.log("dev info: ", this.deviceService.getDeviceInfo());
  }
}
