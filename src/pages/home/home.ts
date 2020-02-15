import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoadingController} from 'ionic-angular';

import {ExperimentePage} from '../experimente/experimente';
import { TourPage } from '../tour/tour';
import {Storage} from '@ionic/storage';
import { ContactsPage } from '../contacts/contacts';
import { ScoreTablePage } from '../score-table/score-table';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  ZERO:any;
  
  constructor(public navCtrl: NavController, private storage: Storage ,public loadingCtrl: LoadingController) {

  }
  goTo(){
    this.navCtrl.setRoot(ExperimentePage);
  }

  goToTour(){
    this.ZERO = parseInt('0');
    this.navCtrl.setRoot(TourPage);
    this.storage.set('score', this.ZERO);
  }

  goToContacts(){
    const loader = this.loadingCtrl.create({
      content:"Please wait...",
      duration: 1500
    });
    loader.present();

    this.navCtrl.setRoot(ContactsPage);
  }

  

}
