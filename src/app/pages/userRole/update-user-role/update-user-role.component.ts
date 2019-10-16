import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRole } from 'src/app/core/models/user_role.models';
import { UserRoleService } from 'src/app/core/services/user-role.service';

@Component({
  selector: 'app-update-user-role',
  templateUrl: './update-user-role.component.html',
  styleUrls: ['./update-user-role.component.scss'],
})
export class UpdateUserRoleComponent implements OnInit {

  breadCrumbItems: Array<{}>;
  formValidation: FormGroup;
  submitControl: boolean;
  userRole: UserRole;
  userRoleId;
  checkboxValue = false;
  success = false;
  constructor(public formBuilder: FormBuilder, private userRoleService: UserRoleService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Ana Sayfa', path: '/' }, { label: 'Kullanıcı Rolü Düzenle', path: '/', active: true }];

    this.formValidation = this.formBuilder.group({
      userRoleName: ['', [Validators.required]],
      userRoleDescription: ['', [Validators.required]],
    });
    this.getUserTitleById();
    this.submitControl = false;
  }

  get basic() {
    return this.formValidation.controls;
  }

  submit() {
    this.submitControl = true;
    if (this.formValidation.status == "VALID") {
      this.userRole = {
        name: this.formValidation.value.userRoleName,
        active: this.checkboxValue,
        description:this.formValidation.value.userRoleDescription,
        id: this.userRoleId
      };
      this.userRoleService.update(this.userRole).subscribe(res => {
        if (res.success) {
          this.success = true;
          setTimeout(() => this.success = false, 500);
          setTimeout(() => this.router.navigate(['/userrole/list']), 1000);
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

  getUserTitleById(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userRoleService.getById(id)
      .subscribe(userRole => {
        this.userRole = userRole;
        this.checkboxValue = userRole.active;
        this.userRoleId = userRole.id;
      });
  }
}