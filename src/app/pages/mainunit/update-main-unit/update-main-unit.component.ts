import { Component, OnInit } from '@angular/core';
import { MainUnitService } from 'src/app/core/services/man-unit.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MainUnits } from 'src/app/core/models/main_units.models';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-main-unit',
  templateUrl: './update-main-unit.component.html',
  styleUrls: ['./update-main-unit.component.scss']
})
export class UpdateMainUnitComponent implements OnInit {

  breadCrumbItems: Array<{}>;
  formValidation: FormGroup;
  submitControl: boolean;
  mainUnit: MainUnits;
  mainUnitId;
  checkboxValue = false ;
  success=false;
  constructor(public formBuilder: FormBuilder, private mainunitService:MainUnitService,private route: ActivatedRoute,private router:Router) { }
  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Ana Sayfa', path: '/' }, { label: 'Ana Birim Düzenle', path: '/', active: true }];

    this.formValidation = this.formBuilder.group({
      mainUnitName: ['', [Validators.required]],
    });
    this.getMainUnitById();
    this.submitControl = false;
  }

  get basic() {
    return this.formValidation.controls;
  }

  submit() {
    this.submitControl = true;
    if(this.formValidation.status=="VALID"){
      this.mainUnit={
        name: this.formValidation.value.mainUnitName,
        active :this.checkboxValue,
        id:this.mainUnitId
      };
      this.mainunitService.update(this.mainUnit).subscribe(res => {
        if(res.isSuccess){
          this.success = true;
          setTimeout(() => this.success = false, 500);
          setTimeout(() => this.router.navigate(['/mainunit/list']),1000);
        }
        else if(!res.isSuccess){
          console.log("Sunucu Tarafından Başarısız Oldu.");
        }
        else{
          console.log("Bağlanamadı");
        }
      });
    
    }
  }
  
  getMainUnitById(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.mainunitService.getById(id)
      .subscribe(mainUnit => {
        this.mainUnit = mainUnit;
        this.checkboxValue=mainUnit.active;
        this.mainUnitId=mainUnit.id;
      });
  }
}