import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MainUnits } from '../models/main_units.models';
@Injectable({ providedIn: 'root' })
export class MainUnitService {
    mainUnits: MainUnits[];
    url = "http://localhost:8080/mainunit/";
    headerDict = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'charset':'utf-8',
      }
    requestOptions = {                                                                                                                                                                                 
        headers: new HttpHeaders(this.headerDict), 
      };
     
    constructor(private http: HttpClient) {
        this.getMainUnits().subscribe(data => this.mainUnits = data);
    }

    getMainUnits() : any {
        return this.http.get(this.url + "list/");
    }

    postMainUnit( mainUnit:MainUnits)  {
        this.http.post(this.url, JSON.stringify(mainUnit), this.requestOptions)
            .subscribe(response => {
              console.log(response);
                this.getMainUnits();
                return true;
            }, error => { return false; });
    }
}

