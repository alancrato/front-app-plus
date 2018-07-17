import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-drops',
  templateUrl: 'drops.html',
})
export class DropsPage {

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams
  ) {}

  pushPost(){
    this.navCtrl.push('SinglePage');
  }

}
