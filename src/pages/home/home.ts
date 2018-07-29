import { Component, Injectable, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { Service } from "../../providers/service";
import { PostsPage } from "../wordpress/posts/posts";
import { PromotionalPage } from "../wordpress/promotional/promotional";
import { Html5Audio } from "../../providers/html5audio";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Service]
})

@IonicPage()
@Injectable()

export class HomePage {
  @ViewChild(Slides) sld: Slides;

  slides:any[];
  streamApi:string;

  getStream(){
    for(let index of this.slides){
      if(index.page == 'HomePage'){
          let stream = index.stream;
          console.log(stream);
          this.streamApi = stream;
      }
    }
  }

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private service: Service,
      private player: Html5Audio,
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

  ionViewWillEnter() {
    setTimeout(() => {
      let url = this.streamApi;
      console.log(url);
    }, 500);
    this.play('http://198.24.156.115:9300/;');
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

  loadPushPage(page){
    this.navCtrl.push(page);
  }

  loadStates(){
    this.navCtrl.push('StatesPage');
  }

  loadAbout(){
    this.navCtrl.push('AboutPage');
  }

  loadPromo(){
    this.navCtrl.push(PromotionalPage);
  }

  loadDrops(){
    this.navCtrl.push(PostsPage);
  }

}
