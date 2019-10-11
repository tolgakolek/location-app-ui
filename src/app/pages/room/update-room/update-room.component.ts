import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FloorService } from 'src/app/core/services/floor.service';
import { RoomTypeService } from 'src/app/core/services/room-type.service';
import { Floors } from 'src/app/core/models/floors.models';
import { RoomType } from 'src/app/core/models/room_types.models';
import { Rooms } from 'src/app/core/models/rooms.models';
import { RoomService } from 'src/app/core/services/room.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.scss']
})
export class UpdateRoomComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  formValidation: FormGroup;
  submitControl: boolean;
  floors: Floors[] = [];
  roomTypes: RoomType[] = [];
  room: Rooms;
  checkboxValue = false;
  typeId = 0;
  floorId = 0;
  roomTypeId;
  roomId;
  success = false;
  constructor(public formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private floorService: FloorService, private roomTypeService: RoomTypeService, private roomService: RoomService) { }
  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Ana Sayfa', path: '/' }, { label: 'Oda Düzenle', path: '/', active: true }];
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
    this.getRoomsById();
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
        id:this.roomId
      };
      if (this.floorId != 0) {
        this.typeId = 0;
      }
      else {
        this.floorId = 0;
      }
      this.roomService.save(this.room, this.floorId, this.typeId).subscribe(res => {
        if (res.isSuccess) {
          this.success = true;
          setTimeout(() => this.success = false, 500);
          setTimeout(() => this.router.navigate(['/room/list']), 1000);
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
  getRoomsById(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.roomService.getById(id)
      .subscribe(room => {
        this.room = room;
        this.roomId = room.id;
        this.checkboxValue = room.active;
        try {
          this.roomTypeId = room.roomType.id;
        }
        catch {
          this.roomTypeId=0;
        }
        try {
          this.floorId=room.floor.id;
        }
        catch {
          this.floorId=0;
        }
        
      });
  }
}


