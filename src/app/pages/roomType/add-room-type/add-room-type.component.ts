import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RoomType } from 'src/app/core/models/room_types.models';
import { HttpClient } from '@angular/common/http';
import { RoomTypeService } from 'src/app/core/services/room-type.service';

@Component({
  selector: 'app-add-room-type',
  templateUrl: './add-room-type.component.html',
  styleUrls: ['./add-room-type.component.scss']
})
export class AddRoomTypeComponent implements OnInit {

  breadCrumbItems: Array<{}>;
  formValidation: FormGroup;
  submitControl: boolean;
  roomType: RoomType;
  checkboxValue = false ;
  success=false;
  constructor(public formBuilder: FormBuilder,private http:HttpClient, private roomTypeService:RoomTypeService) { }
  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Ana Sayfa', path: '/' }, { label: 'Yeni Oda Türü', path: '/', active: true }];

    this.formValidation = this.formBuilder.group({
      roomTypeName: ['', [Validators.required]],
    });
    this.submitControl = false;
  }

  get basic() {
    return this.formValidation.controls;
  }

  submit() {
    this.submitControl = true;
    if(this.formValidation.status=="VALID"){
      this.roomType={
        name: this.formValidation.value.roomTypeName,
        active :this.checkboxValue
      };
      this.roomTypeService.save(this.roomType).subscribe(res => {
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