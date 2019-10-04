import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FloorService } from 'src/app/core/services/floor.service';
import { RoomTypeService } from 'src/app/core/services/room-type.service';
import { Floors } from 'src/app/core/models/floors.models';
import { RoomType } from 'src/app/core/models/room_types.models';
import { Rooms } from 'src/app/core/models/rooms.models';
import { RoomService } from 'src/app/core/services/room.service';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.scss']
})
export class AddRoomComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  formValidation: FormGroup;
  submitControl: boolean;
  floors: Floors[] = [];
  roomTypes: RoomType[] = [];
  room : Rooms;
  checkboxValue = false;
  typeId = 0;
  floorId = 0;
  success = false;
  constructor(public formBuilder: FormBuilder, private floorService: FloorService, private roomTypeService: RoomTypeService, private roomService: RoomService) { }
  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Ana Sayfa', path: '/' }, { label: 'Yeni Oda', path: '/', active: true }];
    this.formValidation = this.formBuilder.group({
      roomName: ['', [Validators.required]],
      roomMap: ['', [Validators.required]],
    });
    this.floorService.getAll().subscribe(data => {
      this.floors = data;
    });
    this.roomTypeService.getAll().subscribe(data => {
      this.roomTypes = data;
    });
    this.submitControl = false;
  }

  get basic() {
    return this.formValidation.controls;
  }
  setFloorId(floorId: any): void {
    this.floorId = floorId;
  }

  setRoomTypeId(typeId: any): void {
    this.typeId = typeId;
  }

  submit() {
    this.submitControl = true;
    if (this.formValidation.status == "VALID") {
      this.room = {
        name: this.formValidation.value.roomName,
        map: this.formValidation.value.roomMap,
        active: this.checkboxValue,
      };
      if (this.floorId != 0) {
        this.typeId=0;
      }
      else {
        this.floorId=0;
      }
      this.roomService.save(this.room, this.floorId, this.typeId).subscribe(res => {
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


