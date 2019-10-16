import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DepartmentService } from 'src/app/core/services/department.service';
import { SubUnitService } from 'src/app/core/services/sub-unit.service';
import { SubUnits } from 'src/app/core/models/sub_units.models';
import { Department } from 'src/app/core/models/department.models';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.scss']
})
export class UpdateDepartmentComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  formValidation: FormGroup;
  submitControl: boolean;
  department: Department;
  departmentId;
  subUnits: SubUnits[] = [];
  sites: any[] = [];
  checkboxValue = false;
  subUnitId = 0;
  siteId = 0;
  success = false;
  constructor(public formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private departmentService: DepartmentService, private subUnitService: SubUnitService) { }
  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Ana Sayfa', path: '/' }, { label: 'Departman Düzenle', path: '/', active: true }];
    this.formValidation = this.formBuilder.group({
      departmentName: ['', [Validators.required]],
      departmentProperties: ['', [Validators.required]],
      departmentOthers: ['', [Validators.required]]
    });
    this.subUnitService.getAll().subscribe(data => {
      this.subUnits = data;
    });
    this.getDepartmentById();
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
        description: this.formValidation.value.departmentProperties,
        other: this.formValidation.value.departmentOthers,
        active: this.checkboxValue,
        id: this.departmentId
      };
      this.departmentService.save(this.department, this.subUnitId).subscribe(res => {
        if (res.success) {
          this.success = true;
          setTimeout(() => this.success = false, 500);
          setTimeout(() => this.router.navigate(['/department/list']), 1000);
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
  getDepartmentById(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.departmentService.getById(id)
      .subscribe(department => {
        this.department = department;
        this.departmentId = department.id;
        this.checkboxValue = department.active;
        this.subUnitId = department.subUnit.id;
      });
  }
}

