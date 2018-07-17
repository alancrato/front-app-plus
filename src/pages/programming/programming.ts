import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProgrammingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-programming',
  templateUrl: 'programming.html',
})
export class ProgrammingPage {

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams
  ) {}

  slides = [
    {
      title: "",
      description: "",
      image: "assets/imgs/prog/programa01.png",
    },
    {
      title: "",
      description: "",
      image: "assets/imgs/prog/programa02.png",
    },
    {
      title: "",
      description: "",
      image: "assets/imgs/prog/programa03.png",
    },
    {
      title: "",
      description: "",
      image: "assets/imgs/prog/programa04.png",
    }
  ];

}
