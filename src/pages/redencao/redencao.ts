import { Component, Injectable, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { Service } from "../../providers/service";

@Component({
  selector: 'page-redencao',
  templateUrl: 'redencao.html',
  providers: [Service]
})

@IonicPage()
@Injectable()

export class RedencaoPage {
  @ViewChild(Slides) sld: Slides;

  slides:any[];

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private service: Service
  ) {}

  getCat(){
    this.service.getCategories()
        .subscribe(result => {
          this.slides = result;
        });
  }

  ngOnInit(){
    this.getCat();
  }

  ionViewDidLoad(){
    setTimeout(() => {
      let index = this.sld.getPreviousIndex();
      console.log(index);
      this.sld.slideTo(index +11);
    }, 500);
  }

  ionViewWillEnter(){
    setTimeout(() => {
      let index = this.sld.getPreviousIndex();
      console.log(index);
      this.sld.slideTo(index);
    }, 500);
  }

  ionViewDidEnter(){
    setTimeout(() => {
      let index = this.sld.getPreviousIndex();
      console.log(index);
      this.sld.slideTo(index);
    }, 500);
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
