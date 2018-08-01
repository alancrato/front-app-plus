import { Component, Injectable, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { Service } from "../../providers/service";
import { Html5Audio } from "../../providers/html5audio";

@Component({
  selector: 'page-santaquiteria',
  templateUrl: 'santaquiteria.html',
  providers: [Service]
})

@IonicPage()
@Injectable()

export class SantaquiteriaPage {
  @ViewChild(Slides) sld: Slides;

  slides:any[];

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private service: Service,
      private player: Html5Audio
  ) {
    {
      this.player.plaY
    }
  }

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
      this.sld.slideTo(index +9);
    }, 500);
  }

  ionViewWillEnter(){
    this.pause();
    this.play('http://198.24.156.115:9316/;');
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

  play(url: string) {
    this.player.play(url);
  }

  stop() {
    this.player.stop();
  }

  pause(){
    this.player.pause();
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
