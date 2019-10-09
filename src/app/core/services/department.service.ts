import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Build } from '../models/build.models';
import { Observable } from "rxjs/Rx";
import { map } from "rxjs/internal/operators";
import { Department } from '../models/department.models';
import { DEPARTMENT_PATH } from '../models/path.models';

@Injectable({ providedIn: 'root' })
export class DepartmentService {
  build: any;

  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'charset': 'utf-8',
  }
  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };

  constructor(private http: HttpClient) { }

  getAll(): Observable<Build[]> {
    return this.http.get<Build[]>(DEPARTMENT_PATH + "list/");
  }

  save(build: Department,subUnitId:number): Observable<any> {
    return this.http.post(DEPARTMENT_PATH+subUnitId.toString(), JSON.stringify(build), this.requestOptions).pipe(map(
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

