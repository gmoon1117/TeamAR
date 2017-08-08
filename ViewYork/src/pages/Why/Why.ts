import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {visited} from '../visited/visited'

@Component({
  selector: 'page-Why',
  templateUrl: 'Why.html'
})
export class Why {
  items: any;
  constructor(public navCtrl: NavController) {

  }

  showVisitedPage() {
      this.navCtrl.push(visited);
  }
}