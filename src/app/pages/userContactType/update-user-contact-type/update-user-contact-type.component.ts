import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserContactTypes } from 'src/app/core/models/user_contact_type.models';
import { UserContactTypeService } from 'src/app/core/services/user-contact-type.service';

@Component({
  selector: 'app-update-user-contact-type',
  templateUrl: './update-user-contact-type.component.html',
  styleUrls: ['./update-user-contact-type.component.scss']
})
export class UpdateUserContactTypeComponent implements OnInit {

  breadCrumbItems: Array<{}>;
  formValidation: FormGroup;
  submitControl: boolean;
  userContactType: UserContactTypes;
  userContactTypeId;
  checkboxValue = false;
  success = false;
  constructor(public formBuilder: FormBuilder, private userContactTypeService: UserContactTypeService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Ana Sayfa', path: '/' }, { label: 'İletişim Türü Düzenle', path: '/', active: true }];

    this.formValidation = this.formBuilder.group({
      userContactTypeName: ['', [Validators.required]],
    });
    this.getUserContactTypeById();
    this.submitControl = false;
  }

  get basic() {
    return this.formValidation.controls;
  }

  submit() {
    this.submitControl = true;
    if (this.formValidation.status == "VALID") {
      this.userContactType = {
        name: this.formValidation.value.userContactTypeName,
        active: this.checkboxValue,
        id: this.userContactTypeId
      };
      this.userContactTypeService.update(this.userContactType).subscribe(res => {
        if (res.success) {
          this.success = true;
          setTimeout(() => this.success = false, 500);
          setTimeout(() => this.router.navigate(['/usercontacttype/list']), 1000);
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

  getUserContactTypeById(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userContactTypeService.getById(id)
      .subscribe(userContactType => {
        this.userContactType = userContactType;
        this.checkboxValue = userContactType.active;
        this.userContactTypeId = userContactType.id;
      });
  }
}