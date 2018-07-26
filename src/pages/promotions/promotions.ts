import { Component, Injectable } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

@IonicPage()
@Injectable()

@Component({
  selector: 'page-promotions',
  templateUrl: 'promotions.html'
})
export class PromotionsPage{

  constructor(
      public navParams: NavParams
  ) {}

}
