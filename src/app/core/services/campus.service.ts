import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Campus } from '../models/campus.models';
import { delay } from 'q';
@Injectable({ providedIn: 'root' })
export class CampusService {
    campus: any;
    url="http://localhost:8080/campus/";
    headerDict = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'charset':'utf-8',
      }
    requestOptions = {                                                                                                                                                                                 
        headers: new HttpHeaders(this.headerDict), 
      };
     
    constructor(private http: HttpClient) {
        this.getCampus();
    }


    getCampus() : any {
        this.http.get(this.url + "list/").subscribe(data => {this.campus = data});
        return this.campus;
    }

    postCampus( campus:Campus)  {
        this.http.post(this.url, JSON.stringify(campus), this.requestOptions)
            .subscribe(response => {
                this.getCampus();
                return true;
            }, error => { return false; });
    }
}

