import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserContactTypes } from '../models/user_contact_type.models';
@Injectable({ providedIn: 'root' })
export class UserContactTypeService {
    userContactType: UserContactTypes[];
    url = "http://localhost:8080//usercontacttype/";
    headerDict = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'charset':'utf-8',
      }
    requestOptions = {                                                                                                                                                                                 
        headers: new HttpHeaders(this.headerDict), 
      };
     
    constructor(private http: HttpClient) {
        this.getUserContactTypes().subscribe(data => this.userContactType = data);
    }

    getUserContactTypes() : any {
        return this.http.get(this.url + "list/");
    }

    postUserContactType( userContactType:UserContactTypes)  {
        this.http.post(this.url, JSON.stringify(userContactType), this.requestOptions)
            .subscribe(response => {
              console.log(response);
                this.getUserContactTypes();
                return true;
            }, error => { return false; });
    }
}

