import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import { TourPage } from '../tour/tour';

/**
 * Generated class for the TourSlidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tour-slide',
  templateUrl: 'tour-slide.html',
})
export class TourSlidePage {
  item;
  varsc: any;
  ten :any;
  scorereal: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage ) {
    this.item = navParams.data.item;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TourSlidePage');
  }

  goToNext(){
    this.storage.get('score').then((val) => {
      this.varsc = parseInt(val);
      
      console.log(val + "val ");

      val = val + 10;
      console.log(val + " osszeadva ");
      this.storage.set('score',val );
    });

    /*console.log(this.varsc+"ez az elso ");
    this.ten = 10;
    //this.scorereal = parseInt(this.varsc);
    console.log(this.scorereal + "score real ");
    this.varsc = parseFloat(this.ten);
    console.log(this.varsc);*/
    
    
   // this.storage.set('score',this.varsc );
    

    this.navCtrl.setRoot(TourPage);

  }

}
