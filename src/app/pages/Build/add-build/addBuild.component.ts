import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Build } from '../../../core/models/build.models';
import { Campus } from '../../../core/models/campus.models';
import { CampusService } from '../../../core/services/campus.service'
import { SitesService } from 'src/app/core/services/sites.service';
import { BuildService } from 'src/app/core/services/build.service';
@Component({
  selector: 'app-add-build',
  templateUrl: './addBuild.component.html',
  styleUrls: ['./addBuild.component.scss'],
})

/**
 * Dashboard-1 component: handling the dashboard-1 with sidebar and content
 */
export class AddBuildComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  formValidation: FormGroup;
  submitControl: boolean;
  build: Build;
  campus: Campus[] = [];
  sites: any[] = [];
  checkboxValue = false;
  campusId = 0;
  siteId = 0;
  success = false;
  constructor(public formBuilder: FormBuilder, private campusService: CampusService, private sitesService: SitesService, private buildService: BuildService) { }
  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Ana Sayfa', path: '/' }, { label: 'Yeni Bina', path: '/', active: true }];
    this.formValidation = this.formBuilder.group({
      buildName: ['', [Validators.required]],
      buildGps: ['', [Validators.required]],
      textareaAddress: ['', [Validators.required]],
      textareaProperties: ['', [Validators.required]]
    });
    this.campusService.getAll().subscribe(data => {
      this.campus = data;
    });
    this.sitesService.getAll().subscribe(data => {
      this.sites = data;
    });
    this.submitControl = false;
  }

  get basic() {
    return this.formValidation.controls;
  }
  setCampusId(campus: any): void {
    this.campusId = campus;
  }

  setSiteId(site: any): void {
    this.siteId = site;
  }

  submit() {
    this.submitControl = true;
    if (this.formValidation.status == "VALID") {
      this.build = {
        name: this.formValidation.value.buildName,
        address: this.formValidation.value.textareaAddress,
        properties: this.formValidation.value.textareaProperties,
        gps: this.formValidation.value.gps,
        active: this.checkboxValue,
      };
      if (this.siteId != 0) {
        this.build.site_id = this.siteId;
      }
      else {
        this.build.campus_id = this.campusId;
      }
      this.buildService.save(this.build, this.campusId, this.siteId).subscribe(res => {
        if (res.isSuccess) {
        this.success = true;
          setTimeout(() => this.success = false, 2000);
          setTimeout(() => this.checkboxValue = false, 2000);
          setTimeout(() => this.formValidation.reset(), 2000);
          setTimeout(() => this.submitControl = false, 2000);
        }
        else if (!res.isSuccess) {
          console.log("Sunucu Tarafından Başarısız Oldu.");
        }
        else {
          console.log("Bağlanamadı");
        }
      });

    }
  }
}

