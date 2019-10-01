import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-site',
  templateUrl: './add-site.component.html',
  styleUrls: ['./add-site.component.scss']
})
export class AddSiteComponent implements OnInit {

  breadCrumbItems: Array<{}>;
  constructor() { }

  ngOnInit() {
    
    this.breadCrumbItems = [{ label: 'Ana Sayfa', path: '/' }, { label: 'Site Ekle', path: '/', active: true }];
  }

}
