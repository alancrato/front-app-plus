import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-promotions',
  templateUrl: 'promotions.html',
})
export class PromotionsPage {

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams
  ) {}

}
