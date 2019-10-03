import { Component, OnInit } from '@angular/core';
import { MainUnitService } from 'src/app/core/services/man-unit.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MainUnits } from 'src/app/core/models/main_units.models';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-main-unit',
  templateUrl: './add-main-unit.component.html',
  styleUrls: ['./add-main-unit.component.scss']
})
export class AddMainUnitComponent implements OnInit {

  breadCrumbItems: Array<{}>;
  formValidation: FormGroup;
  submitControl: boolean;
  mainUnit: MainUnits;
  checkboxValue = false ;
  success=false;
  constructor(public formBuilder: FormBuilder,private http:HttpClient, private mainunitService:MainUnitService) { }
  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Ana Sayfa', path: '/' }, { label: 'Yeni Birim', path: '/', active: true }];

    this.formValidation = this.formBuilder.group({
      mainUnitName: ['', [Validators.required]],
    });
    
    this.submitControl = false;
  }

  get basic() {
    return this.formValidation.controls;
  }

  submit() {
    this.submitControl = true;
    if(this.formValidation.status=="VALID"){
      this.mainUnit={
        name: this.formValidation.value.mainUnitName,
        isActive :this.checkboxValue
      };
      this.mainunitService.postMainUnit(this.mainUnit);
      this.success=true;
      setTimeout(() => this.success = false, 2000);
      setTimeout(() => this.checkboxValue = false, 2000);
      setTimeout(() => this.formValidation.reset(), 2000);
      setTimeout(() => this.submitControl=false, 2000);
    
    }
  }
}