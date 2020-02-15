import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpClientModule} from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ExperimentePage} from '../pages/experimente/experimente';
import {ExperimentePageModule} from '../pages/experimente/experimente.module';
import {ExperimentPage} from '../pages/experiment/experiment';
import {ExperimentPageModule} from '../pages/experiment/experiment.module';
import {TourPageModule} from '../pages/tour/tour.module';
import {TourPage} from '../pages/tour/tour';
import {TourSlidePage} from '../pages/tour-slide/tour-slide';
import {TourSlidePageModule} from '../pages/tour-slide/tour-slide.module';
import {ContactsPage} from '../pages/contacts/contacts';
import {ContactsPageModule} from '../pages/contacts/contacts.module';
import {ScoreTablePage} from '../pages/score-table/score-table';
import {ScoreTablePageModule} from '../pages/score-table/score-table.module';

import  {IonicStorageModule} from '@ionic/storage';
import { ScoreService } from '../providers/score.service';



@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ExperimentePageModule,
    ExperimentPageModule,
    TourPageModule,
    TourSlidePageModule,
    ContactsPageModule,
    ScoreTablePageModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ExperimentePage,
    ExperimentPage,
    TourPage,
    TourSlidePage,
    ContactsPage,
    ScoreTablePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ScoreService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
