import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/contact/contact.html'
})
export class ContactPage {
  constructor(public navCtrl: NavController) {
  }
  
  ionViewWillEnter()
  {
    console.log("ContactPage ionViewWillEnter");
  }

  ionViewWillLeave()
  {
    console.log("ContactPage ionViewWillLeave");
  }
}
