import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Campus } from "../../../core/models/campus.models";
import { CampusService } from 'src/app/core/services/campus.service';
@Component({
  selector: 'app-add-campus',
  templateUrl: './addCampus.component.html',
  styleUrls: ['./addCampus.component.scss'],
})

/**
 * Dashboard-1 component: handling the dashboard-1 with sidebar and content
 */
export class AddCampusComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;
  formValidation: FormGroup;
  submitControl: boolean;
  campus: Campus;
  checkboxValue = false ;
  success=false;
  constructor(public formBuilder: FormBuilder,private http:HttpClient, private campusService:CampusService) { }
  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Home', path: '/' }, { label: 'Yeni Kampüs', path: '/', active: true }];

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
    if(this.formValidation.status=="VALID"){
      this.campus={
        active:this.checkboxValue,
        campusSites:null,
        name:this.formValidation.value.campusName,
      };
      console.log(this.campusService.postCampus(this.campus));
      this.success=true;
      setTimeout(() => this.success = false, 2000);
      setTimeout(() => this.checkboxValue = false, 2000);
      setTimeout(() => this.formValidation.reset(), 2000);
      setTimeout(() => this.submitControl=false, 2000);
     
    }
  }
}
