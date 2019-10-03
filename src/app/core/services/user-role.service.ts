import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserRole } from '../models/user_role.models';
@Injectable({ providedIn: 'root' })
export class UserRoleService {
    userRole: UserRole[];
    url = "http://localhost:8080//userrole/";
    headerDict = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'charset':'utf-8',
      }
    requestOptions = {                                                                                                                                                                                 
        headers: new HttpHeaders(this.headerDict), 
      };
     
    constructor(private http: HttpClient) {
        this.getUserRoles().subscribe(data => this.userRole = data);
    }

    getUserRoles() : any {
        return this.http.get(this.url + "list/");
    }

    postUserRole( userRole:UserRole)  {
        this.http.post(this.url, JSON.stringify(userRole), this.requestOptions)
            .subscribe(response => {
              console.log(response);
                this.getUserRoles();
                return true;
            }, error => { return false; });
    }
}

