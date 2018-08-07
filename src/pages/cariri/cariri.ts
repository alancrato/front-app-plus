import { Component, Injectable, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { Service } from "../../providers/service";
import { PostsPage } from "../wordpress/posts/posts";
import { Html5Audio } from "../../providers/html5audio";

@Component({
  selector: 'page-cariri',
  templateUrl: 'cariri.html',
  providers: [Service]
})

@IonicPage()
@Injectable()

export class CaririPage {
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
      this.sld.slideTo(index +2);
      let newIndex = this.sld.length();
      console.log(newIndex);
    }, 500);
  }

  ionViewWillEnter(){
    this.pause();
    this.play('http://198.24.156.115:9318/;');
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
    this.navCtrl.push(PostsPage);
  }

}
