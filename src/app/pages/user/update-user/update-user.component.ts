import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/core/models/users.models';
import { UserService } from 'src/app/core/services/user.service';
import { UserTitle } from 'src/app/core/models/user_title.models';
import { UserTitleService } from 'src/app/core/services/user-title.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRole } from 'src/app/core/models/user_role.models';
import { Department } from 'src/app/core/models/department.models';
import { UserRoleService } from 'src/app/core/services/user-role.service';
import { DepartmentService } from 'src/app/core/services/department.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  roles: UserRole[] = [];
  departments: Department[] = [];
  selectRole = [];
  selectDepartment = [];
  breadCrumbItems: Array<{}>;
  formValidation: FormGroup;
  submitControl: boolean;
  checkboxValue = false;
  success = false;
  user: User;
  userTitles: UserTitle[];
  userTitle: UserTitle;
  userTitleId = 0;
  userId = 0;
  genderId = -1;
  constructor(public formBuilder: FormBuilder, private userRoleService: UserRoleService, private departmentService: DepartmentService, private userService: UserService, private route: ActivatedRoute, private router: Router, private userTitleService: UserTitleService) { }
  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Ana Sayfa', path: '/' }, { label: 'Kullanıcı Düzenle', path: '/', active: true }];

    this.formValidation = this.formBuilder.group({
      userName: ['', [Validators.required]],
      userSurname: ['', [Validators.required]],
      userPassword: ['', [Validators.required]],
      userNationId: ['', [Validators.required]],
      userEmail: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    });
    this.userTitleService.getAll().subscribe(data => {
      this.userTitles = data;
    });
    this.userRoleService.getAll().subscribe(data => {
      this.roles = data;
    })
    this.departmentService.getAll().subscribe(data => {
      this.departments = data;
      this.selectDepartment=[1];
    })
    this.getUserById();
    this.submitControl = false;
  }

  get basic() {
    return this.formValidation.controls;
  }
  setUserTitleId(userTitleId: any) {
    this.userTitleId = userTitleId;
  }
  setGenderId(genderId: any) {
    this.genderId = genderId;
  }
  setRole(role: any) {
    this.selectRole = role;
  }
  setDepartment(department: any) {
    //this.selectDepartment = department;
  }
  submit() {
    this.submitControl = true;
    if (this.formValidation.status == "VALID") {
      this.user = {
        name: this.formValidation.value.userName,
        surname: this.formValidation.value.userSurname,
        password: this.formValidation.value.userPassword,
        email: this.formValidation.value.userEmail,
        gender: this.genderId,
        nationId: this.formValidation.value.userNationId,
        active: this.checkboxValue,
        //departments: this.selectDepartment,
        roles: this.selectRole,
        id: this.userId
      };
      this.userService.update(this.user, this.userTitleId).subscribe(res => {
        if (res.success) {
          this.success = true;
          setTimeout(() => this.success = false, 500);
          setTimeout(() => this.router.navigate(['/user/list']), 1000);
        }
        else if (!res.success) {
          console.log(res);
        }
        else {
          console.log("Bağlanamadı");
        }
      });
    }
  }
  getUserById(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getById(id)
      .subscribe(user => {
        this.user = user;
        this.userId = user.id;
        this.userTitleId = user.userTitle.id;
        this.checkboxValue = user.active;
        this.genderId = user.gender;
        //this.selectDepartment = user.departments;
        this.selectRole = user.roles;
        /*
        for (let i = 0; user.departments[i] != null; i++) {
          this.selectDepartment.push(user.departments[i].id);
        }*/
        console.log(this.selectDepartment);
        this.formValidation.setValue({
          userName: user.name,
          userSurname: user.surname,
          userPassword: user.password,
          userNationId: user.nationId,
          userEmail: user.email
        });
      });
  }
}
