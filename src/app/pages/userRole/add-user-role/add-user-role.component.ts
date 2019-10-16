import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserRoleService } from 'src/app/core/services/user-role.service';
import { UserRole } from 'src/app/core/models/user_role.models';

@Component({
  selector: 'app-add-user-role',
  templateUrl: './add-user-role.component.html',
  styleUrls: ['./add-user-role.component.scss']
})
export class AddUserRoleComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  formValidation: FormGroup;
  submitControl: boolean;
  userRole: UserRole;
  checkboxValue = false ;
  success=false;
  constructor(public formBuilder: FormBuilder,private http:HttpClient, private userRoleService:UserRoleService) { }
  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Ana Sayfa', path: '/' }, { label: 'Yeni Kullanıcı Rolü', path: '/', active: true }];

    this.formValidation = this.formBuilder.group({
      userRoleName: ['', [Validators.required]],
      userRoleDescription: ['', [Validators.required]]
    });
    this.submitControl = false;
  }

  get basic() {
    return this.formValidation.controls;
  }

  submit() {
    this.submitControl = true;
    if(this.formValidation.status=="VALID"){
      this.userRole={
        name: this.formValidation.value.userRoleName,
        description: this.formValidation.value.userRoleDescription,
        active :this.checkboxValue
      };
      this.userRoleService.save(this.userRole).subscribe(res => {
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