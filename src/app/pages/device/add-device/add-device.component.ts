import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DeviceTypeService } from 'src/app/core/services/device-type.service';
import { DeviceTypes } from 'src/app/core/models/device_types.models';
import { Devices } from 'src/app/core/models/devices.models';
import { DeviceService } from 'src/app/core/services/device.service';
import { Rooms } from 'src/app/core/models/rooms.models';
import { RoomService } from 'src/app/core/services/room.service';

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
  rooms:Rooms[]=[];
  roomId;
  checkboxValue = false;
  deviceTypeId = 0;
  success = false;
  constructor(public formBuilder: FormBuilder,private roomService:RoomService, private deviceTypeService: DeviceTypeService,private deviceService:DeviceService) { }
  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Ana Sayfa', path: '/' }, { label: 'Yeni Cihaz', path: '/', active: true }];
    this.formValidation = this.formBuilder.group({
      deviceName: ['', [Validators.required]],
      deviceTechnology: ['', [Validators.required]],
      deviceLocationX:['', [Validators.required]],
      deviceLocationY:['', [Validators.required]],
      deviceMacAddress:['', [Validators.required]],
      deviceDescription: ['', [Validators.required]]
    });
    this.deviceTypeService.getAll().subscribe(data => {
      this.deviceTypes = data;
    });
    this.roomService.getAll().subscribe(data => {
      this.rooms = data;
    });
    this.submitControl = false;
  }

  get basic() {
    return this.formValidation.controls;
  }
  setDeviceTypeId(deviceTypeId: any): void {
    this.deviceTypeId = deviceTypeId;
  }
  setRoomId(roomId: any): void {
    this.roomId = roomId;
  }
  submit() {
    this.submitControl = true;
    if (this.formValidation.status == "VALID") {
      this.device = {
        name: this.formValidation.value.deviceName,
        technology: this.formValidation.value.deviceTechnology,
        properties:this.formValidation.value.deviceDescription,
        active: this.checkboxValue,
        locationX:this.formValidation.value.deviceLocationX,
        locationY:this.formValidation.value.deviceLocationY,
        macAddress:this.formValidation.value.deviceMacAddress,
      };
      this.deviceService.save(this.device,this.deviceTypeId,this.roomId).subscribe(res => {
        if (res.success) {
        this.success = true;
          setTimeout(() => this.success = false, 2000);
          setTimeout(() => this.checkboxValue = false, 2000);
          setTimeout(() => this.formValidation.reset(), 2000);
          setTimeout(() => this.submitControl = false, 2000);
        }
        else if (!res.success) {
          console.log("Sunucu Tarafından Başarısız Oldu.");
        }
        else {
          console.log("Bağlanamadı");
        }
      });

    }
  }
}
