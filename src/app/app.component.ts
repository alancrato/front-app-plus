import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from "../providers/auth";
import { Redirector } from "../providers/redirector";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: string = 'SlidesPage';
  pages: Array<{title: string, component: string, icon: any}>;
  user:any;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public auth:AuthProvider,
    public redirector: Redirector
  ) {
    this.initializeApp();
    // set our app's pages
    this.pages = [
      { title: 'Início', component: 'SlidesPage', icon: 'home'},
      { title: 'Estações', component: 'StatesPage', icon: 'radio' },
      { title: 'Sobre', component: 'AboutPage', icon: 'document' },
      { title: 'Promoções', component: 'PromotionsPage', icon: 'calendar' },
      { title: 'Drops da Plus', component: 'DropsPage', icon: 'paper' },
      { title: 'Programação', component: 'ProgrammingPage', icon: 'reorder' },
      { title: 'Login', component: 'LoginPage', icon: 'person' },
      { title: 'Criar Conta', component: 'AccountPage', icon: 'person-add' }
    ];
  }

  initializeApp() {
    this.auth.user().then(user => {
      this.user = user;
    });
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngAfterViewInit(){
    //this.redirector.config(this.nav); redirector force login
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  logout(){
    this.auth.logout().then(() => {
      this.nav.setRoot('LoginPage');
    }).catch(() => {
      this.nav.setRoot('LoginPage');
    })
  }

}
