import { Component, Injectable } from '@angular/core';
import { IonicPage, MenuController, NavController, ToastController } from 'ionic-angular';
import { UserResource } from "../../providers/user.resource";

@Injectable()
@IonicPage()

@Component({
  selector: 'page-user-register',
  templateUrl: 'user-register.html',
})
export class UserRegisterPage {

  user = {
    name: '',
    email: '',
    password: '',
    password_confirmation: ''

  };

  constructor(
      public navCtrl: NavController,
      public menuCtrl: MenuController,
      public tostCtrl: ToastController,
      public userResource: UserResource
  ){
      this.menuCtrl.enable(true);
  }

  register() {
    this.userResource.create(this.user)
        .then(() => {
          this.menuCtrl.enable(true);
          console.log('Usuário criado com sucesso');
          let toast = this.tostCtrl.create({
            message: 'Usuário criado com sucesso, Seja Bem vindo a Plus Fm!',
            duration: 5000,
            position: 'top',
            cssClass: 'login-reverse'
          });
          toast.present();
          this.navCtrl.setRoot('HomePage');
        })
        .catch(() => {
          let toast = this.tostCtrl.create({
            message: 'Dados Invalidos',
            duration: 3000,
            position: 'top',
            cssClass: 'login-reverse'
          });
          toast.present();
        })
    }

}
