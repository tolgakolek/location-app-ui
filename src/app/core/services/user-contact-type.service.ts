import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserContactTypes } from '../models/user_contact_type.models';
import { Observable } from "rxjs/Rx";
import { map } from "rxjs/internal/operators";
import { USERCONTACTTYPE_PATH } from '../models/path.models';


@Injectable({ providedIn: 'root' })
export class UserContactTypeService {
  userContactType: UserContactTypes[];
  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'charset': 'utf-8',
  }
  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };

  constructor(private http: HttpClient) { }

  getAll(): Observable<UserContactTypes[]> {
    return this.http.get<UserContactTypes[]>(USERCONTACTTYPE_PATH + "list/");
  }

  save(userContactType: UserContactTypes): Observable<any> {
    return this.http.post(USERCONTACTTYPE_PATH, JSON.stringify(userContactType), this.requestOptions).pipe(map(
      res => {
        if (res) {
          return res;
        } else {
          return {};
        }
      }
    ));
  }
}

