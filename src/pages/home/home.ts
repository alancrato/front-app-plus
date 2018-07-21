import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams
  ) {}

  slides = [
    {
      title: "",
      description: "",
      image: "assets/imgs/01_card.png",
      page: 'StatesPage'
    },
    {
      title: "",
      description: "",
      image: "assets/imgs/02_card.png",
      page: 'AboutPage'
    },
    {
      title: "",
      description: "",
      image: "assets/imgs/03_card.png",
      page: 'PromotionsPage'
    },
    {
      title: "",
      description: "",
      image: "assets/imgs/04_card.png",
      page: 'DropsPage'
    }
  ];

  loadPage(page){
    this.navCtrl.setRoot(page);
  }

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
