import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
//import { HttpClient } from '@angular/common/http';
import {ExperimentService} from '../../providers/experiment.service';
import {ScoreService} from '../../providers/score.service';
import {HomePage} from '../home/home';
import {TourSlidePage} from '../tour-slide/tour-slide';
import {Storage} from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import { ScoreTablePage } from '../score-table/score-table';
import {LoadingController} from 'ionic-angular';

/**
 * Generated class for the TourPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tour',
  templateUrl: 'tour.html',
})
export class TourPage {

  experiments:Observable<any>;
  
  effectivscore: any;
  usernick = { name : '', score : ''};
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public experimentService: ExperimentService,
    public scoreService: ScoreService,
    private storage: Storage,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController) {

  }

   ionViewDidLoad() {
    this.experimentService.getExperiments().subscribe(
      experiments => {
        this.experiments = experiments;
      }
    )

  
   

    this.getData();
    
     
    

    console.log('ionViewDidLoad TourPage');
  }

  ionViewWillEnter(){
    this.getData();
  }

  goToBack(){
    this.navCtrl.setRoot(HomePage);
  }

  goToRanklist(){
    this.navCtrl.setRoot(ScoreTablePage);
  }

 saveUsernick(){
   this.usernick.score = this.effectivscore;
   console.log(this.usernick.name+ " user name");
   console.log(this.usernick.score + " user score");
   this.scoreService.addScore(this.usernick).then((result) => {
    console.log(result);
  }, (err) => {
    console.log(err);
  });

  const loader = this.loadingCtrl.create({
    content:"Please wait...",
    duration: 2000
  });
  loader.present();

  this.navCtrl.push(ScoreTablePage);
 }

  getData(){
    this.storage.get('score').then((val) => {
      console.log(val);
      this.effectivscore = parseInt(val);
      if(((this.effectivscore % 50) == 0) && (this.effectivscore != 0) ){
        this.CongratsAlert();
      }
      console.log(this.effectivscore);
    });
    
  }

  openNavDetailsPage(item) {
    this.navCtrl.push(TourSlidePage, { item: item });
  }

  CongratsAlert(){
    const alert = this.alertCtrl.create({
      title: 'Felicitări!',
      subTitle: 'Ai lucrat mult, faci o pauza! :p',
      buttons: ['OK']
    });
    alert.present();
  
  }

}
