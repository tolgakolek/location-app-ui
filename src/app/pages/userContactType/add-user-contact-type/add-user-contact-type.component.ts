import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserContactTypes } from 'src/app/core/models/user_contact_type.models';
import { HttpClient } from '@angular/common/http';
import { UserContactTypeService } from 'src/app/core/services/user-contact-type.service';

@Component({
  selector: 'app-add-user-contact-type',
  templateUrl: './add-user-contact-type.component.html',
  styleUrls: ['./add-user-contact-type.component.scss']
})
export class AddUserContactTypeComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  formValidation: FormGroup;
  submitControl: boolean;
  userContactType: UserContactTypes;
  checkboxValue = false ;
  success=false;
  constructor(public formBuilder: FormBuilder,private http:HttpClient, private userContactTypeService:UserContactTypeService) { }
  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Ana Sayfa', path: '/' }, { label: 'Yeni İletişim Türü', path: '/', active: true }];

    this.formValidation = this.formBuilder.group({
      userContactTypeName: ['', [Validators.required]],
    });
    this.submitControl = false;
  }

  get basic() {
    return this.formValidation.controls;
  }

  submit() {
    this.submitControl = true;
    if(this.formValidation.status=="VALID"){
      this.userContactType={
        name: this.formValidation.value.userContactTypeName,
        active :this.checkboxValue
      };
      this.userContactTypeService.save(this.userContactType).subscribe(res => {
        if(res.success){this.success = true;
          setTimeout(() => this.success = false, 2000);
          setTimeout(() => this.checkboxValue = false, 2000);
          setTimeout(() => this.formValidation.reset(), 2000);
          setTimeout(() => this.submitControl = false, 2000);
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
}