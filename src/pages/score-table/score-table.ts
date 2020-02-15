import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import {ScoreService} from '../../providers/score.service';
import {HomePage} from '../home/home';
import { TourPage } from '../tour/tour';

/**
 * Generated class for the ScoreTablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-score-table',
  templateUrl: 'score-table.html',
})
export class ScoreTablePage {

  scores:Observable<any>;
  filteredScore = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public scoreService: ScoreService) {
  }

  async ionViewDidLoad() {
   this.scores = await this.scoreService.getScores(); 
    
   console.log(this.scores);
   this.filterScores(this.scores);
   
   //this.scores.
    console.log('ionViewDidLoad ScoreTablePage');
  }

  async ionViewWillEnter(){
    this.scores = await this.scoreService.getScores(); 
    
   console.log(this.scores);
   this.filterScores(this.scores);
  }

  filterScores(score:any){
    this.filteredScore = score;
    console.log(this.filteredScore + "first");
  


    var temp = 0;
    for (var i = 0; i < this.filteredScore.length - 1; i++) {
      for (var j = i + 1; j < this.filteredScore.length; j++) {
        if (this.filteredScore[i].score > this.filteredScore[j].score) {
            temp = this.filteredScore[j];
            console.log(this.filteredScore[j].score + " score ")
            console.log(temp+ " temp");
            this.filteredScore[j] = this.filteredScore[i];
            this.filteredScore[i] = temp;
        }
      }
    }

    this.filteredScore.reverse();
    console.log(this.filteredScore + " reverse");
  }

  goToBack(){
    this.navCtrl.setRoot(TourPage);
  }

}
