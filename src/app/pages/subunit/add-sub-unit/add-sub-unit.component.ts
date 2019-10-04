import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { BlockService } from 'src/app/core/services/block.service';
import { BuildService } from 'src/app/core/services/build.service';
import { Block } from 'src/app/core/models/block.models';
import { MainUnits } from 'src/app/core/models/main_units.models';
import { SubUnitService } from 'src/app/core/services/sub-unit.service';
import { MainUnitService } from 'src/app/core/services/man-unit.service';
import { SubUnits } from 'src/app/core/models/sub_units.models';

@Component({
  selector: 'app-add-sub-unit',
  templateUrl: './add-sub-unit.component.html',
  styleUrls: ['./add-sub-unit.component.scss']
})
export class AddSubUnitComponent implements OnInit {
 
  // bread crumb items
  breadCrumbItems: Array<{}>;
  formValidation: FormGroup;
  submitControl: boolean;
  mainUnits: MainUnits[] = [];
  subUnit: SubUnits;
  checkboxValue = false;
  success = false;
  mainUnitId:number;
  constructor(public formBuilder: FormBuilder, private subUnitService: SubUnitService, private mainUnitService: MainUnitService) { }
  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Ana Sayfa', path: '/' }, { label: 'Yeni Alt Birim', path: '/', active: true }];

    this.formValidation = this.formBuilder.group({
      mainUnitName: ['', [Validators.required]]
    });
    this.mainUnitService.getAll().subscribe(data => {
      this.mainUnits = data;
    });
    this.submitControl = false;
  }

  get basic() {
    return this.formValidation.controls;
  }

  setMainUnitId(mainUnitId: any) {
    this.mainUnitId = mainUnitId;
  }

  submit() {
    this.submitControl = true;
    if (this.formValidation.status == "VALID") {
      this.subUnit = {
        name: this.formValidation.value.mainUnitName,
        active:this.checkboxValue
      };
      console.log(this.subUnit);
      this.subUnitService.save(this.subUnit,this.mainUnitId).subscribe(res => {
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

