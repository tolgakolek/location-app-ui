import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserTitleService } from 'src/app/core/services/user-title.service';
import { UserTitle } from 'src/app/core/models/user_title.models';

@Component({
  selector: 'app-update-user-title',
  templateUrl: './update-user-title.component.html',
  styleUrls: ['./update-user-title.component.scss'],
})
export class UpdateUserTitleComponent implements OnInit {

  breadCrumbItems: Array<{}>;
  formValidation: FormGroup;
  submitControl: boolean;
  userTitle: UserTitle;
  userTitleId;
  checkboxValue = false;
  success = false;
  constructor(public formBuilder: FormBuilder, private userTitleService: UserTitleService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Ana Sayfa', path: '/' }, { label: 'Kullanıcı Ünvanı Düzenle', path: '/', active: true }];

    this.formValidation = this.formBuilder.group({
      userTitleName: ['', [Validators.required]],
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
      this.userTitle = {
        name: this.formValidation.value.userTitleName,
        active: this.checkboxValue,
        id: this.userTitleId
      };
      this.userTitleService.update(this.userTitle).subscribe(res => {
        if (res.success) {
          this.success = true;
          setTimeout(() => this.success = false, 500);
          setTimeout(() => this.router.navigate(['/usertitle/list']), 1000);
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
    this.userTitleService.getById(id)
      .subscribe(userContactType => {
        this.userTitle = userContactType;
        this.checkboxValue = userContactType.active;
        this.userTitleId = userContactType.id;
      });
  }
}