import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TourSlidePage } from './tour-slide';

@NgModule({
  declarations: [
    TourSlidePage,
  ],
  imports: [
    IonicPageModule.forChild(TourSlidePage),
  ],
})
export class TourSlidePageModule {}
