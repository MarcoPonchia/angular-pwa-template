import { Injectable } from "@angular/core";
import { AngularFireMessaging } from "@angular/fire/messaging";
import * as Actions from "../topics/store/topics.actions";
import { Store } from "@ngrx/store";

@Injectable({
  providedIn: "root"
})
export class MessagingService {
  constructor(
    private store: Store<any>,
    private angularFireMessaging: AngularFireMessaging
  ) {
    this.angularFireMessaging.messaging.subscribe(_messaging => {
      _messaging.onMessage = _messaging.onMessage.bind(_messaging);
      _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
    });
  }

  requestPermission() {
    this.angularFireMessaging.requestToken.subscribe(
      token => {
        console.log(token);
      },
      err => {
        console.error("Unable to get permission to notify.", err);
      }
    );
  }

  receiveMessage() {
    this.angularFireMessaging.messages.subscribe(payload => {
      console.log("new message received. ", payload);
      // this.currentMessage.next(payload);
      this.store.dispatch(Actions.fakeFetchTopic());
    });
  }
}
