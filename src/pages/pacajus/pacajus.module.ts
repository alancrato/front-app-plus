import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PacajusPage } from './pacajus';

@NgModule({
  declarations: [
    PacajusPage,
  ],
  imports: [
    IonicPageModule.forChild(PacajusPage),
  ],
})
export class PacajusPageModule {}
