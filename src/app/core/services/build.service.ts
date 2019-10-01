import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Build } from '../models/build.models';
@Injectable({ providedIn: 'root' })
export class BuildService {
    build: any;

    url="http://localhost:8080/build/";
    headerDict = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'charset':'utf-8',
      }
    requestOptions = {                                                                                                                                                                                 
        headers: new HttpHeaders(this.headerDict), 
      };
     
    constructor(private http: HttpClient) {
        
    }

    postBuild( build:Build,campusId,siteId)  {
        this.http.post(this.url+"campus/"+campusId.toString() + "/site/" + siteId.toString(), JSON.stringify(build), this.requestOptions)
            .subscribe(response => {
                return true;
            }, error => { return false; });
    }
}

  