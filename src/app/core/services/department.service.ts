import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  getAll(): Observable<Department[]> {
    return this.http.get<Department[]>(DEPARTMENT_PATH + "list/");
  }
  
  getById(id): Observable<Department> {
    return this.http.get<Department>(DEPARTMENT_PATH + id);
  }
  update(department: Department, subUnitId: number): Observable<any> {
    return this.http.post(DEPARTMENT_PATH + subUnitId.toString(), JSON.stringify(department), this.requestOptions).pipe(map(
      res => {
        if (res) {
          return res;
        } else {
          return {};
        }
      }
    ));
  }
  save(department: Department, subUnitId: number): Observable<any> {
    return this.http.post(DEPARTMENT_PATH + subUnitId.toString(), JSON.stringify(department), this.requestOptions).pipe(map(
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

