import { Component, OnInit } from '@angular/core';

import { List, Label } from './email-list.model';

import { emailList, emailLabel } from './data';

@Component({
  selector: 'app-emaillist',
  templateUrl: './emaillist.component.html',
  styleUrls: ['./emaillist.component.scss']
})

export class EmaillistComponent implements OnInit {

  // Email left sidebar data
  emailList: List[];
  emailLabel: Label[];

  constructor() { }

  ngOnInit() {
    /**
     * Fetches data
     */
    this._fetchData();
  }

  /**
   * fetches the list and label value
   */
  private _fetchData() {

    // leftbar list
    this.emailList = emailList;
    // leftbar label
    this.emailLabel = emailLabel;
  }
}
