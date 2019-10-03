import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserRole } from 'src/app/core/models/user_role.models';
import { HttpClient } from '@angular/common/http';
import { UserTitleService } from 'src/app/core/services/user-title.service';
import { UserTitle } from 'src/app/core/models/user_title.models';

@Component({
  selector: 'app-add-user-title',
  templateUrl: './add-user-title.component.html',
  styleUrls: ['./add-user-title.component.scss']
})
export class AddUserTitleComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  formValidation: FormGroup;
  submitControl: boolean;
  userTitle: UserTitle;
  checkboxValue = false ;
  success=false;
  constructor(public formBuilder: FormBuilder,private http:HttpClient, private userTitleService:UserTitleService) { }
  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Ana Sayfa', path: '/' }, { label: 'Yeni KUllanıcı Rolü', path: '/', active: true }];

    this.formValidation = this.formBuilder.group({
      userTitleName: ['', [Validators.required]]
    });
    this.submitControl = false;
  }

  get basic() {
    return this.formValidation.controls;
  }

  submit() {
    this.submitControl = true;
    if(this.formValidation.status=="VALID"){
      this.userTitle={
        name:this.formValidation.value.userTitleName,
        isActive:this.checkboxValue  
      };
      this.userTitleService.postUserTitle(this.userTitle);
      this.success=true;
      setTimeout(() => this.success = false, 2000);
      setTimeout(() => this.checkboxValue = false, 2000);
      setTimeout(() => this.formValidation.reset(), 2000);
      setTimeout(() => this.submitControl=false, 2000);
    
    }
  }
}