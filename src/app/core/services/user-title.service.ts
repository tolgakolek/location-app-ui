import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserRole } from '../models/user_role.models';
import { UserTitle } from '../models/user_title.models';
@Injectable({ providedIn: 'root' })
export class UserTitleService {
    userRole: UserTitle[];
    url = "http://localhost:8080//usertitle/";
    headerDict = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'charset':'utf-8',
      }
    requestOptions = {                                                                                                                                                                                 
        headers: new HttpHeaders(this.headerDict), 
      };
     
    constructor(private http: HttpClient) {
        this.getUserTitles().subscribe(data => this.userRole = data);
    }

    getUserTitles() : any {
        return this.http.get(this.url + "list/");
    }

    postUserTitle( userTitle:UserTitle)  {
        this.http.post(this.url, JSON.stringify(userTitle), this.requestOptions)
            .subscribe(response => {
              console.log(response);
                this.getUserTitles();
                return true;
            }, error => { return false; });
    }
}

