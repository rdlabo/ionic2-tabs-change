
import { NavController } from 'ionic-angular';
import {Component,ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';

@Component({
  templateUrl: 'build/pages/home/home.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {
  constructor(
      private cd: ChangeDetectorRef,
      public navCtrl: NavController
  ) {

  }

  ionViewWillEnter()
  {
    console.log("HomePage ionViewWillEnter");this.cd.markForCheck();
  }

  ionViewWillLeave()
  {
    console.log("HomePage ionViewWillLeave");
  }
}
