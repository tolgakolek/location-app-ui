import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { DeviceTypes } from 'src/app/core/models/device_types.models';
import { HttpClient } from '@angular/common/http';
import { DeviceTypeService } from 'src/app/core/services/device-type.service';

@Component({
  selector: 'app-add-device-type',
  templateUrl: './add-device-type.component.html',
  styleUrls: ['./add-device-type.component.scss']
})
export class AddDeviceTypeComponent implements OnInit {

  breadCrumbItems: Array<{}>;
  formValidation: FormGroup;
  submitControl: boolean;
  deviceType: DeviceTypes;
  checkboxValue = false ;
  success=false;
  constructor(public formBuilder: FormBuilder,private http:HttpClient, private deviceTypeService:DeviceTypeService) { }
  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Ana Sayfa', path: '/' }, { label: 'Yeni Cihaz Türü', path: '/', active: true }];

    this.formValidation = this.formBuilder.group({
      deviceTypeName: ['', [Validators.required]],
    });
    this.submitControl = false;
  }

  get basic() {
    return this.formValidation.controls;
  }

  submit() {
    this.submitControl = true;
    if(this.formValidation.status=="VALID"){
      this.deviceType={
        name: this.formValidation.value.deviceTypeName,
        active :this.checkboxValue
      };
      console.log(this.deviceType);
      this.deviceTypeService.save(this.deviceType).subscribe(res => {
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