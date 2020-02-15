import { Component,ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';

declare var google:any;

@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage {
  @ViewChild('map') mapRef : ElementRef;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log(this.mapRef);
    console.log('ionViewDidLoad ContactsPage');
    this.showMap();
  }
  goToBack(){
    this.navCtrl.setRoot(HomePage);
  }

  showMap(){
    const location = new google.maps.LatLng( 45.749072,  21.230017 );

    const options = {
      center: location,
      zoom: 18
    }

    const map = new google.maps.Map(this.mapRef.nativeElement, options);

    this.addMarker(location,map);

  }

  addMarker(position, map){
    return new google.maps.Marker({
      position,
      map
    });
  }

}
