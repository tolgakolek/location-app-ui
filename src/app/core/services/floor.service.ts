import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Floors } from '../models/floors.models';
import { Observable } from "rxjs/Rx";
import { map } from "rxjs/internal/operators";
import { FLOOR_PATH } from '../models/path.models';

@Injectable({
  providedIn: 'root'
})
export class FloorService {
  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'charset': 'utf-8',
  }
  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };

  constructor(private http: HttpClient) { }

  getAll(): Observable<Floors[]> {
    return this.http.get<Floors[]>(FLOOR_PATH + "list/");
  }

  save(floor: Floors, blookId:number, buildId:number): Observable<any> {
    return this.http.post(FLOOR_PATH+"block/"+blookId.toString()+"/build/"+buildId.toString(), JSON.stringify(floor), this.requestOptions).pipe(map(
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
