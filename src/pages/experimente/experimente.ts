import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import {ExperimentService} from '../../providers/experiment.service';
import { ExperimentPage } from '../experiment/experiment';
import {HomePage} from '../home/home';

/**
 * Generated class for the ExperimentePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-experimente',
  templateUrl: 'experimente.html',
})
export class ExperimentePage {
  experiments: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public experimentService: ExperimentService) {

    

  }

  ionViewDidLoad() {
    this.experimentService.getExperiments().subscribe(
      experiments => {
        this.experiments = experiments;
      }
    )
    console.log('ionViewDidLoad ExperimentePage');
  }

  goToBack(){
    this.navCtrl.setRoot(HomePage);
  }

  openNavDetailsPage(item) {
    this.navCtrl.push(ExperimentPage, { item: item });
  }

  initExperiments(){
    
        this.experiments ;
   
  }


  getItems(ev) {
    
    

    var val = ev.target.value;
    if (val && val.trim() != '') {
      this.experiments = this.experiments.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
