import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DeviceTypeService } from 'src/app/core/services/device-type.service';
import { DeviceTypes } from 'src/app/core/models/device_types.models';
import { Devices } from 'src/app/core/models/devices.models';
import { DeviceService } from 'src/app/core/services/device.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from 'src/app/core/services/room.service';
import { Rooms } from 'src/app/core/models/rooms.models';

@Component({
  selector: 'app-update-device',
  templateUrl: './update-device.component.html',
  styleUrls: ['./update-device.component.scss']
})
export class UpdateDeviceComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  formValidation: FormGroup;
  submitControl: boolean;
  deviceTypes: DeviceTypes[] = [];
  deviceId;
  roomId;
  rooms:Rooms[]=[];
  device: Devices;
  sites: any[] = [];
  checkboxValue = false;
  deviceTypeId = 0;
  success = false;
  constructor(public formBuilder: FormBuilder,private roomService:RoomService, private route: ActivatedRoute, private router: Router, private deviceTypeService: DeviceTypeService, private deviceService: DeviceService) { }
  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Ana Sayfa', path: '/' }, { label: 'Cihaz Düzenle', path: '/', active: true }];
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
    this.getDeviceById();
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
  setRoomId(roomId: any): void {
    this.roomId = roomId;
  }
  submit() {
    this.submitControl = true;
    if (this.formValidation.status == "VALID") {
      this.device = {
        name: this.formValidation.value.deviceName,
        technology: this.formValidation.value.deviceTechnology,
        properties: this.formValidation.value.deviceDescription,
        active: this.checkboxValue,
        locationX:this.formValidation.value.deviceLocationX,
        locationY:this.formValidation.value.deviceLocationY,
        macAddress:this.formValidation.value.deviceMacAddress,
        id: this.deviceId
      };
      this.deviceService.update(this.device, this.deviceTypeId,this.roomId).subscribe(res => {
        if (res.success) {
          this.success = true;
          setTimeout(() => this.success = false, 500);
          setTimeout(() => this.router.navigate(['/device/list']), 1000);
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
  getDeviceById(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.deviceService.getById(id)
      .subscribe(device => {
        this.device = device;
        this.deviceId = device.id;
        this.checkboxValue = device.active;
        this.deviceTypeId = device.deviceType.id;
        this.roomId=device.room.id;
      });
  }
}
