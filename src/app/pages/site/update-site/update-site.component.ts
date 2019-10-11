import { Component, OnInit } from '@angular/core';
import { Sites } from '../../../core/models/sites.models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SitesService } from 'src/app/core/services/sites.service';
import { Campus } from 'src/app/core/models/campus.models';
import { CampusService } from 'src/app/core/services/campus.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-site',
  templateUrl: './update-site.component.html',
  styleUrls: ['./update-site.component.scss']
})
export class UpdateSiteComponent implements OnInit {

  breadCrumbItems: Array<{}>;
  formValidation: FormGroup;
  submitControl: boolean;
  site: Sites;
  siteId;
  checkboxValue = false;
  success = false;
  campusId = 0;
  campus: Campus[] = [];
  constructor(public formBuilder: FormBuilder,private route:ActivatedRoute,private router:Router, private sitesService: SitesService, private campusService: CampusService) { }

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
    this.getSiteById();
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
      this.site = {
        name: this.formValidation.value.siteName,
        gps: this.formValidation.value.siteGps,
        active: this.checkboxValue,
        description: this.formValidation.value.siteDescription,
        id:this.siteId
      }

      this.sitesService.update(this.site, this.campusId).subscribe(res => {
        if (res.isSuccess) {
          this.success = true;
          setTimeout(() => this.success = false, 500);
          setTimeout(() => this.router.navigate(['/site/list']), 1000);
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

  getSiteById(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.sitesService.getById(id)
      .subscribe(site => {
        this.site = site;
        this.checkboxValue = site.active;
        this.siteId = site.id;
        this.campusId = site.campus.id;
      });
  }
}
