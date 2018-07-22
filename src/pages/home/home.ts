import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Service } from "../../providers/service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[Service]
})

@IonicPage()
@Injectable()

export class HomePage {

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private service: Service
  ) {}

  slides = [];

  ngOnInit(){
    this.getCat();
  }

  getCat(){
    this.service.getCategories()
        .subscribe(result => {
          this.slides = result;
        });
  }

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
