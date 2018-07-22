import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Http, HttpModule, XHRBackend } from "@angular/http";
import { JwtClientProvider } from '../providers/jwt-client';
import { IonicStorageModule, Storage } from "@ionic/storage";
import { AuthConfig, AuthHttp, JwtHelper } from "angular2-jwt";
import { AuthProvider } from '../providers/auth';
import { ENV } from "../models/env";
import { DefaultXHRBackend } from '../providers/defalt-xhr-backend';
import { Redirector } from '../providers/redirector';
import { Service } from "../providers/service";

declare var ENV:ENV;

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      driverOrder: ['localstorage']
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    JwtHelper,
    JwtClientProvider,
    AuthProvider,
    Redirector,
    Service,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {
      provide: AuthHttp,
      deps: [Http, Storage],
      useFactory(http,storage){
        let authConfig = new AuthConfig({
          headerPrefix: 'Bearer',
          noJwtError: true,
          noClientCheck: true,
          tokenGetter: (() => storage.get(ENV.TOKEN_NAME))
        });
        return new AuthHttp(authConfig,http);
      }
    },
    {provide: XHRBackend, useClass: DefaultXHRBackend},
  ]
})
export class AppModule {}
