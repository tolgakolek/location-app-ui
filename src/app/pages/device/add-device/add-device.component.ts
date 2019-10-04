import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DeviceTypeService } from 'src/app/core/services/device-type.service';
import { DeviceTypes } from 'src/app/core/models/device_types.models';
import { Devices } from 'src/app/core/models/devices.models';
import { DeviceService } from 'src/app/core/services/device.service';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.scss']
})
export class AddDeviceComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  formValidation: FormGroup;
  submitControl: boolean;
  deviceTypes: DeviceTypes[] = [];
  device:Devices;
  sites: any[] = [];
  checkboxValue = false;
  deviceTypeId = 0;
  success = false;
  constructor(public formBuilder: FormBuilder, private deviceTypeService: DeviceTypeService,private deviceService:DeviceService) { }
  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Ana Sayfa', path: '/' }, { label: 'Yeni Cihaz', path: '/', active: true }];
    this.formValidation = this.formBuilder.group({
      deviceName: ['', [Validators.required]],
      deviceTechnology: ['', [Validators.required]],
      deviceDescription: ['', [Validators.required]]
    });
    this.deviceTypeService.getAll().subscribe(data => {
      this.deviceTypes = data;
    });
    this.submitControl = false;
  }

  get basic() {
    return this.formValidation.controls;
  }
  getSite() {
    return this.sites.filter(site => site.active);
  }

  setDeviceTypeId(deviceTypeId: any): void {
    this.deviceTypeId = deviceTypeId;
  }

  submit() {
    this.submitControl = true;
    if (this.formValidation.status == "VALID") {
      this.device = {
        name: this.formValidation.value.buildName,
        technology: this.formValidation.value.deviceTechnology,
        properties:this.formValidation.value.deviceDescription,
        active: this.checkboxValue,
      };
      this.deviceService.save(this.device,this.deviceTypeId).subscribe(res => {
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
