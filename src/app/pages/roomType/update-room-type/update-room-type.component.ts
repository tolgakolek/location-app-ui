import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomType } from 'src/app/core/models/room_types.models';
import { RoomTypeService } from 'src/app/core/services/room-type.service';

@Component({
  selector: 'app-update-room-type',
  templateUrl: './update-room-type.component.html',
  styleUrls: ['./update-room-type.component.scss']
})
export class UpdateRoomTypeComponent implements OnInit {

  breadCrumbItems: Array<{}>;
  formValidation: FormGroup;
  submitControl: boolean;
  roomType: RoomType;
  roomTypeId;
  checkboxValue = false ;
  success=false;
  constructor(public formBuilder: FormBuilder, private roomTypeService:RoomTypeService,private route: ActivatedRoute,private router:Router) { }
  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Ana Sayfa', path: '/' }, { label: 'Oda Türü Düzenle', path: '/', active: true }];

    this.formValidation = this.formBuilder.group({
      roomTypeName: ['', [Validators.required]],
    });
    this.getRoomTypeById();
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
        active :this.checkboxValue,
        id:this.roomTypeId
      };
      this.roomTypeService.update(this.roomType).subscribe(res => {
        if(res.success){
          this.success = true;
          setTimeout(() => this.success = false, 500);
          setTimeout(() => this.router.navigate(['/roomType/list']),1000);
        }
        else if(!res.success){
          console.log("Sunucu Tarafından Başarısız Oldu.");
        }
        else{
          console.log("Bağlanamadı");
        }
      });
    
    }
  }
  getRoomTypeById(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.roomTypeService.getById(id)
      .subscribe(roomType => {
        this.roomType = roomType;
        this.checkboxValue=roomType.active;
        this.roomTypeId=roomType.id;
      });
  }
}