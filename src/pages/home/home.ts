import {Component, Injectable, ViewChild } from '@angular/core';
import {IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { Service } from "../../providers/service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[Service]
})

@IonicPage()
@Injectable()

export class HomePage {
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


  slidesChanged() {
    let index = this.sld.getActiveIndex();
    //let currentIndex = this.sld.activeIndex = 4;
    //let currentIndex = this.sld.activeIndex() = 4;
    //let currentIndex = this.sld.activeIndex(4);
    let currentIndex = this.sld.slideTo(4);
    console.log(index);
    console.log(currentIndex);
  }

  ionViewDidLoad(){
    let currentIndex = this.sld.getActiveIndex();
    console.log("Current index is", currentIndex);
    setTimeout(() => {
      this.sld.slideTo(2);
    }, 500);
  }

  ionViewWillEnter(){
    this.sld.slideTo(2);
  }

  ionViewDidEnter(){
    this.sld.slideTo(2);
  }

  ionViewWillLeave(){
    this.sld.slideTo(2);
  }

  ionViewDidLeave(){
    this.sld.slideTo(2);
  }

  ionViewWillUnload(){
    this.sld.slideTo(5);
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
