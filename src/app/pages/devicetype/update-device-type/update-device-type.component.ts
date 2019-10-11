import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { DeviceTypes } from 'src/app/core/models/device_types.models';
import { DeviceTypeService } from 'src/app/core/services/device-type.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-update-device-type',
  templateUrl: './update-device-type.component.html',
  styleUrls: ['./update-device-type.component.scss']
})
export class UpdateDeviceTypeComponent implements OnInit {

  breadCrumbItems: Array<{}>;
  formValidation: FormGroup;
  submitControl: boolean;
  deviceType: DeviceTypes;
  deviceTypeId;
  checkboxValue = false ;
  success=false;
  constructor(public formBuilder: FormBuilder, private deviceTypeService:DeviceTypeService,private route: ActivatedRoute,private router:Router) { }
  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Ana Sayfa', path: '/' }, { label: 'Yeni Cihaz Türü', path: '/', active: true }];

    this.formValidation = this.formBuilder.group({
      deviceTypeName: ['', [Validators.required]],
    });
    this.getDeviceTypeId();
    this.submitControl = false;
  }

  get basic() {
    return this.formValidation.controls;
  }

  submit() {
    this.submitControl = true;
    if(this.formValidation.status=="VALID"){
      this.deviceType={
        id:this.deviceTypeId,
        name: this.formValidation.value.deviceTypeName,
        active :this.checkboxValue
      };
      this.deviceTypeService.update(this.deviceType).subscribe(res => {
        if(res.isSuccess){
          this.success = true;
          setTimeout(() => this.success = false, 500);
          setTimeout(() => this.router.navigate(['/devicetype/list']),1000);
          ;
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
  getDeviceTypeId(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.deviceTypeService.getById(id)
      .subscribe(deviceType => {
        this.deviceType = deviceType;
        this.checkboxValue=deviceType.active;
        this.deviceTypeId=deviceType.id;
      });
  }
}