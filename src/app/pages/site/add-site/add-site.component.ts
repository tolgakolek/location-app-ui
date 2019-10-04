import { Component, OnInit } from '@angular/core';
import { Sites } from '../../../core/models/sites.models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SitesService } from 'src/app/core/services/sites.service';
import { Campus } from 'src/app/core/models/campus.models';
import { CampusService } from 'src/app/core/services/campus.service';

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
  campusId = 0;
  campus: Campus[] = [];
  constructor(public formBuilder: FormBuilder, private sitesService: SitesService, private campusService:CampusService) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Ana Sayfa', path: '/' }, { label: 'Site Ekle', path: '/', active: true }];
    this.formValidation = this.formBuilder.group({
      siteName: ['', [Validators.required]],
      siteGps: ['', [Validators.required]],
      siteDescription: ['', [Validators.required]],
    });
    this.campusService.getAll().subscribe(data => {
      this.campus = data;
    });
    this.submitControl = false;
  }
  get basic() {
    return this.formValidation.controls;
  }
  setCampusId(campus: any): void {
    this.campusId = campus;
  }
  submit() {
    this.submitControl = true;
    if (this.formValidation.status == "VALID") {
      this.site={
        name: this.formValidation.value.siteName,
        gps : this.formValidation.value.siteGps,
        active:this.checkboxValue,
        description:this.formValidation.value.siteDescription
      }

      this.sitesService.save(this.site,this.campusId).subscribe(res => {
        if(res.isSuccess){this.success = true;
          setTimeout(() => this.success = false, 2000);
          setTimeout(() => this.checkboxValue = false, 2000);
          setTimeout(() => this.formValidation.reset(), 2000);
          setTimeout(() => this.submitControl = false, 2000);
        }
        else if(!res.isSuccess){
          console.log("Sunucu Tarafından Başarısız Oldu.");
        }
        else{
          console.log("Bağlanamadı");
        }
      });

    }
  }
}
