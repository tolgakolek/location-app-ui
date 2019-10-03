import { Component, OnInit } from '@angular/core';
import { Sites } from '../../../core/models/sites.models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SitesService } from 'src/app/core/services/sites.service';

@Component({
  selector: 'app-add-site',
  templateUrl: './add-site.component.html',
  styleUrls: ['./add-site.component.scss']
})
export class AddSiteComponent implements OnInit {

  breadCrumbItems: Array<{}>;
  formValidation: FormGroup;
  submitControl: boolean;
  site: Sites;
  checkboxValue = false;
  success = false;
  constructor(public formBuilder: FormBuilder, private sitesService: SitesService) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Ana Sayfa', path: '/' }, { label: 'Site Ekle', path: '/', active: true }];
    this.formValidation = this.formBuilder.group({
      siteName: ['', [Validators.required]],
      siteGps: ['', [Validators.required]],
      siteDescription: ['', [Validators.required]],
    });
    this.submitControl = false;
  }
  get basic() {
    return this.formValidation.controls;
  }
  submit() {
    this.submitControl = true;
    if (this.formValidation.status == "VALID") {
      this.site={
        name: this.formValidation.value.siteName,
        gps : this.formValidation.value.siteGps,
        isActive:this.checkboxValue,
        description:this.formValidation.value.siteDescription
      }
      this.sitesService.postSites(this.site);
      
      this.success = true;
      setTimeout(() => this.success = false, 2000);
      setTimeout(() => this.checkboxValue = false, 2000);
      setTimeout(() => this.formValidation.reset(), 2000);
      setTimeout(() => this.submitControl = false, 2000);

    }
  }
}
