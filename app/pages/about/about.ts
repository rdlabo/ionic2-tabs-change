import { Component } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/about/about.html'
})
export class AboutPage {
  constructor(
      public navCtrl: NavController,
      public loadCtrl:LoadingController
  ) {}

  ionViewWillEnter()
  {
    let loader = this.loadCtrl.create();
    loader.present();
    loader.dismiss();
    console.log("AboutPage ionViewWillEnter");
  }

  ionViewLoaded()
  {
    console.log("AboutPage ionViewLoaded");
  }

  ionViewWillLeave()
  {
    console.log("AboutPage ionViewWillLeave");
  }
}
