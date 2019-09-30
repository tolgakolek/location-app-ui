import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Build } from './model';
import { Campus } from '../../Campus/AddCampus/model';
import { asapScheduler } from 'rxjs';
@Component({
  selector: 'app-add-build',
  templateUrl: './addBuild.component.html',
  styleUrls: ['./addBuild.component.scss'],
})

/**
 * Dashboard-1 component: handling the dashboard-1 with sidebar and content
 */
export class AddBuildComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;
  basicFormvalidation: FormGroup;
  basicsubmit: boolean;
  build: Build;
  campus: Campus[] = [];
  site: any[] = [];
  checkboxValue = false;
  campusId = 0;
  siteId = 0;
  success = false;
  url = "http://localhost:8080/build/";
  constructor(public formBuilder: FormBuilder, private http: HttpClient) { }
  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Home', path: '/' }, { label: 'Yeni Bina', path: '/', active: true }];

    this.basicFormvalidation = this.formBuilder.group({
      buildName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      buildGps: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      textareaAddress: ['', [Validators.required]],
      textareaProperties: ['', [Validators.required]]
    });

    this.http.get("http://localhost:8080/campus/list/").subscribe(response => {
      this.campus = JSON.parse(JSON.stringify(response))}, error => {console.log("hata " + error)}
    );

    this.http.get("http://localhost:8080/site/list/").subscribe(response =>
      this.site = JSON.parse(JSON.stringify(response)), error => console.log("hata " + error)
      );

    this.basicsubmit = false;
  }

  get basic() {
    return this.basicFormvalidation.controls;
  }

  getCampus() {
    return this.campus;
  }

  getSite() {
    return this.site.filter(site => site.active);
  }

  setCampusId(campus: any): void {
    this.campusId = campus;
  }

  setSiteId(site: any): void {
    this.siteId = site;
  }

  basicSubmit() {
    this.basicsubmit = true;
    if (this.basicFormvalidation.status == "VALID") {
      this.build = {
        name: this.basicFormvalidation.value.buildName,
        address: this.basicFormvalidation.value.textareaAddress,
        properties: this.basicFormvalidation.value.textareaProperties,
        gps: this.basicFormvalidation.value.gps,
        is_active: this.checkboxValue,
      };
      if (this.siteId != 0) {
        this.build.site_id = this.siteId;
      }
      else {
        this.build.campus_id = this.campusId;
      }

      const headerDict = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'charset': 'utf-8',
      }
      const requestOptions = {
        headers: new HttpHeaders(headerDict),
      };
      this.url = "http://localhost:8080/build/campus/" + this.campusId.toString() + "/site/" + this.siteId.toString();
      console.log(this.url);
      this.http.post(this.url, JSON.stringify(this.build), requestOptions)
        .subscribe(response => {
          this.success = true;
          setTimeout(() => this.success = false, 2000);
          setTimeout(() => this.checkboxValue = false, 2000);
          setTimeout(() => this.basicFormvalidation.reset(), 2000);
          setTimeout(() => this.basicsubmit = false, 2000);
        })

    }
  }
}

