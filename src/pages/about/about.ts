import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Service } from "../../providers/service";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [Service]
})

@IonicPage()
@Injectable()

export class AboutPage{

  cat: any;
  stat:any;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private service: Service,
  ) {}

  ngOnInit(){
    this.getCat();
    this.getStat();
  }

  getCat(){
    this.service.getCategories()
        .subscribe(result => {
          this.cat = result;
        });
  }

  getStat(){
    this.service.getStates()
        .subscribe(result => {
          this.stat = result;
        });
  }

}
