import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Campus } from "./model";
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
  basicFormvalidation: FormGroup;
  basicsubmit: boolean;
  campus: Campus;
  checkboxValue = false ;
  success=false;
  url="http://localhost:8080/campus/";
  constructor(public formBuilder: FormBuilder,private http:HttpClient) { }
  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Home', path: '/' }, { label: 'Yeni Kampüs', path: '/', active: true }];

    this.basicFormvalidation = this.formBuilder.group({
      campusName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
    });
    
    this.basicsubmit = false;
  }

  get basic() {
    return this.basicFormvalidation.controls
  }

  basicSubmit() {
    this.basicsubmit = true;
    if(this.basicFormvalidation.status=="VALID"){
      this.campus={
        active:this.checkboxValue,
        campusSites:null,
        name:this.basicFormvalidation.value.campusName,
      };

      const headerDict = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'charset':'utf-8',
      }
      const requestOptions = {                                                                                                                                                                                 
        headers: new HttpHeaders(headerDict), 
      };
      
      this.http.post(this.url,JSON.stringify(this.campus),requestOptions)
                .subscribe( response => {
                  console.log(response);
                  this.success=true;
                  setTimeout(() => this.success = false, 2000);
                  setTimeout(() => this.checkboxValue = false, 2000);
                  setTimeout(() => this.basicFormvalidation.reset(), 2000);
                  setTimeout(() => this.basicsubmit=false, 2000);
                })
    }
  }
}
