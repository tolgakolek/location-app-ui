import { Component, OnInit, Input } from '@angular/core';
import { Campus } from 'src/app/core/models/campus.models';
import { ActivatedRoute, Router } from '@angular/router';
import { CampusService } from 'src/app/core/services/campus.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-campus',
  templateUrl: './update-campus.component.html',
  styleUrls: ['./update-campus.component.scss']
})
export class UpdateCampusComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;
  formValidation: FormGroup;
  submitControl: boolean;
  campus: Campus;
  campusId:number;
  checkboxValue = false;
  success = false;
  constructor(private route: ActivatedRoute, public formBuilder: FormBuilder, private campusService: CampusService,private router:Router) { }
  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Ana Sayfa', path: '/' }, { label: 'Kampüs Düzenle', path: '/', active: true }];
    this.getCampusById();
    this.formValidation = this.formBuilder.group({
      campusName: ['', [Validators.required]],
    });
    this.submitControl = false;
  }

  get basic() {
    return this.formValidation.controls;
  }

  submit() {
    this.submitControl = true;
    if (this.formValidation.status == "VALID") {
      this.campus = {
        active: this.checkboxValue,
        campusSites: null,
        name: this.formValidation.value.campusName,
        id:this.campusId
      };
      console.log(this.campus);
      this.campusService.update(this.campus).subscribe(res => {
        if (res.isSuccess) {
          this.success = true;
          setTimeout(() => this.success = false, 500);
          setTimeout(() => this.router.navigate(['/campus/list']),1000);
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
  getCampusById(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.campusService.getById(id)
      .subscribe(campus => {
        this.campus = campus;
        this.checkboxValue=campus.active;
        this.campusId=campus.id;
      });
  }
}
