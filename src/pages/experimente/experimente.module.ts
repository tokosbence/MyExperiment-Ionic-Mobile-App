import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExperimentePage } from './experimente';
import {ExperimentService} from '../../providers/experiment.service';

@NgModule({
  declarations: [
    ExperimentePage,
  ],
  imports: [
    IonicPageModule.forChild(ExperimentePage),
  ],
  providers: [
    ExperimentService
  ]
})
export class ExperimentePageModule {}
