import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  breadCrumbItems: Array<{}>;
  selectRole: string[];
  selectDepartment: string[];
  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Ana Sayfa', path: '/' }, { label: 'Kullanıcı Ekle', path: '/', active: true }];

    this.selectRole = ['Admin', 'Öğrenci', 'Personel', 'Görevli', 'Misafir'];
    this.selectDepartment = ['Bilgisayar', 'Elektrik', 'Harita', 'İnşaat'];
  }

}
