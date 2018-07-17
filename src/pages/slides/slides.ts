import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html',
})
export class SlidesPage {

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams
  ) {}

  slides = [
    {
      title: "",
      description: "",
      image: "assets/imgs/01_card.png",
    },
    {
      title: "",
      description: "",
      image: "assets/imgs/02_card.png",
    },
    {
      title: "",
      description: "",
      image: "assets/imgs/03_card.png",
    },
    {
      title: "",
      description: "",
      image: "assets/imgs/04_card.png",
    }
  ];

  loadStates(){
    this.navCtrl.push('StatesPage');
  }

  loadAbout(){
    this.navCtrl.push('AboutPage');
  }

  loadPromo(){
    this.navCtrl.push('PromotionsPage');
  }

  loadDrops(){
    this.navCtrl.push('DropsPage');
  }

}
