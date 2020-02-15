import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScoreTablePage } from './score-table';

@NgModule({
  declarations: [
    ScoreTablePage,
  ],
  imports: [
    IonicPageModule.forChild(ScoreTablePage),
  ],
})
export class ScoreTablePageModule {}
