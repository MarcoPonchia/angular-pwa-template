import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { SharedModule } from "./shared/shared.module";
import { CommonModule, AsyncPipe } from "@angular/common";
import { UserModule } from "./user/user.module";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";
import { HttpClientModule } from "@angular/common/http";
import { AngularFireMessagingModule } from "@angular/fire/messaging";
import { AngularFireModule } from "@angular/fire";
import { MessagingService } from "./shared/messaging.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    UserModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireMessagingModule,
    AppRoutingModule,
    // ServiceWorkerModule.register("main-sw.js", {
    //   enabled: environment.production
    // }),
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    }),
    StoreDevtoolsModule.instrument()
    // !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [MessagingService, AsyncPipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
