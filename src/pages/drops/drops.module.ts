import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DropsPage } from './drops';

@NgModule({
  declarations: [
    DropsPage,
  ],
  imports: [
    IonicPageModule.forChild(DropsPage),
  ],
})
export class DropsPageModule {}
