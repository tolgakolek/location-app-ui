import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RoomType } from '../models/room_types.models';
import { Observable } from "rxjs/Rx";
import { map } from "rxjs/internal/operators";
import { ROOMTYPE_PATH } from '../models/path.models';


@Injectable({ providedIn: 'root' })
export class RoomTypeService {
  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'charset': 'utf-8',
  }
  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };

  constructor(private http: HttpClient) { }

  getAll(): Observable<RoomType[]> {
    return this.http.get<RoomType[]>(ROOMTYPE_PATH + "list/");
  }

  save(roomType: RoomType): Observable<any> {
    return this.http.post(ROOMTYPE_PATH, JSON.stringify(roomType), this.requestOptions).pipe(map(
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

