import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DepartmentService } from 'src/app/core/services/department.service';
import { SubUnitService } from 'src/app/core/services/sub-unit.service';
import { SubUnits } from 'src/app/core/models/sub_units.models';
import { Department } from 'src/app/core/models/department.models';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss']
})
export class AddDepartmentComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  formValidation: FormGroup;
  submitControl: boolean;
  department: Department;
  subUnits: SubUnits[] = [];
  sites: any[] = [];
  checkboxValue = false;
  subUnitId = 0;
  siteId = 0;
  success = false;
  constructor(public formBuilder: FormBuilder, private departmentService: DepartmentService,private subUnitService:SubUnitService) { }
  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Ana Sayfa', path: '/' }, { label: 'Yeni Departman', path: '/', active: true }];
    this.formValidation = this.formBuilder.group({
      departmentName: ['', [Validators.required]],
      departmentProperties: ['', [Validators.required]],
      departmentOthers: ['', [Validators.required]]
    });
    this.subUnitService.getAll().subscribe(data => {
      this.subUnits = data;
    });
    this.submitControl = false;
  }

  get basic() {
    return this.formValidation.controls;
  }

  setSubUnitId(subUnitId: any): void {
    this.subUnitId = subUnitId;
  }


  submit() {
    this.submitControl = true;
    if (this.formValidation.status == "VALID") {
      this.department = {
        name: this.formValidation.value.departmentName,
        description:this.formValidation.value.departmentProperties,
        other:this.formValidation.value.departmentOthers,
        active: this.checkboxValue,
      };
      this.departmentService.save(this.department, this.subUnitId).subscribe(res => {
        if (res.isSuccess) {
        this.success = true;
          setTimeout(() => this.success = false, 2000);
          setTimeout(() => this.checkboxValue = false, 2000);
          setTimeout(() => this.formValidation.reset(), 2000);
          setTimeout(() => this.submitControl = false, 2000);
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
}

