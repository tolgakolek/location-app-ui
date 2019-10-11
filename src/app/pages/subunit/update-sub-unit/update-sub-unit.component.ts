import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MainUnits } from 'src/app/core/models/main_units.models';
import { SubUnitService } from 'src/app/core/services/sub-unit.service';
import { MainUnitService } from 'src/app/core/services/man-unit.service';
import { SubUnits } from 'src/app/core/models/sub_units.models';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-sub-unit',
  templateUrl: './update-sub-unit.component.html',
  styleUrls: ['./update-sub-unit.component.scss']
})
export class UpdateSubUnitComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;
  formValidation: FormGroup;
  submitControl: boolean;
  mainUnits: MainUnits[] = [];
  subUnit: SubUnits;
  subUnitId;
  checkboxValue = false;
  success = false;
  mainUnitId: number;
  constructor(public formBuilder: FormBuilder,private route:ActivatedRoute, private subUnitService: SubUnitService, private mainUnitService: MainUnitService, private router: Router) { }
  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Ana Sayfa', path: '/' }, { label: 'Yeni Alt Birim', path: '/', active: true }];

    this.formValidation = this.formBuilder.group({
      subUnitName: ['', [Validators.required]]
    });
    this.mainUnitService.getAll().subscribe(data => {
      this.mainUnits = data;
    });
    this.getSubUnitById();
    this.submitControl = false;
  }

  get basic() {
    return this.formValidation.controls;
  }

  setMainUnitId(mainUnitId: any) {
    console.log(mainUnitId);
    this.mainUnitId = mainUnitId;
  }

  submit() {
    this.submitControl = true;
    if (this.formValidation.status == "VALID") {
      this.subUnit = {
        name: this.formValidation.value.subUnitName,
        active: this.checkboxValue,
        id: this.subUnitId
      };
      this.subUnitService.update(this.subUnit, this.mainUnitId).subscribe(res => {
        if (res.isSuccess) {
          this.success = true;
          setTimeout(() => this.success = false, 500);
          setTimeout(() => this.router.navigate(['/subunit/list']), 1000);
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
  getSubUnitById(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.subUnitService.getById(id)
      .subscribe(subUnit => {
        this.subUnit = subUnit;
        this.checkboxValue = subUnit.active;
        this.subUnitId = subUnit.id;
        this.mainUnitId=subUnit.mainUnit.id;
      });
  }
}

