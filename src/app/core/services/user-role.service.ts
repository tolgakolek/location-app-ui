import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserRole } from '../models/user_role.models';
import { Observable } from "rxjs/Rx";
import { map } from "rxjs/internal/operators";
import { USERROLE_PATH } from '../models/path.models';



@Injectable({ providedIn: 'root' })
export class UserRoleService {
  userRole: UserRole[];
  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'charset': 'utf-8',
  }
  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };

  constructor(private http: HttpClient) { }

  getAll(): Observable<UserRole[]> {
    return this.http.get<UserRole[]>(USERROLE_PATH + "list/");
  }

  save(campus: UserRole): Observable<any> {
    return this.http.post(USERROLE_PATH, JSON.stringify(campus), this.requestOptions).pipe(map(
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

