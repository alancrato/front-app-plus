import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-single',
  templateUrl: 'single.html',
})
export class SinglePage {

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams
  ) {}

}
