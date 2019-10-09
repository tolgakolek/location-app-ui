import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MainUnits } from '../models/main_units.models';
import { Observable } from "rxjs/Rx";
import { map } from "rxjs/internal/operators";
import { MAINUNIT_PATH } from '../models/path.models';



@Injectable({ providedIn: 'root' })
export class MainUnitService {
  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'charset': 'utf-8',
  }
  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };

  constructor(private http: HttpClient) { }

  getAll(): Observable<MainUnits[]> {
    return this.http.get<MainUnits[]>(MAINUNIT_PATH + "list/");
  }

  save(mainUnit: MainUnits): Observable<any> {
    return this.http.post(MAINUNIT_PATH, JSON.stringify(mainUnit), this.requestOptions).pipe(map(
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

