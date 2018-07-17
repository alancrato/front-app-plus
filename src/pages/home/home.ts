import { Component } from '@angular/core';
import {IonicPage, MenuController, NavController} from 'ionic-angular';
import 'rxjs/add/operator/toPromise';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {

  constructor(
      public navCtrl: NavController,
      public menu: MenuController,
  )
  {
    this.menu.enable(true);
  }

  ionViewDidLoad() {

  }
}
