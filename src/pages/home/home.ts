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
      title: "HomePage",
      description: "",
      image: "assets/imgs/slides/01_card.png",
      page: 'HomePage'
    },
    {
      title: "Aracati",
      description: "",
      image: "assets/imgs/slides/02_card.png",
      page: 'StatesPage'
    },
    {
      title: "Cariri",
      description: "",
      image: "assets/imgs/slides/03_card.png",
      page: 'AboutPage'
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
