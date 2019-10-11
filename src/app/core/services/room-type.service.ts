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
    'Access-Control-Allow-Origin': 'http://localhost:8080',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
  }
  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };

  constructor(private http: HttpClient) { }

  getAll(): Observable<RoomType[]> {
    return this.http.get<RoomType[]>(ROOMTYPE_PATH + "list/");
  }
  getById(id): Observable<RoomType> {
    return this.http.get<RoomType>(ROOMTYPE_PATH + id);
  }

  update(roomType: RoomType): Observable<any> {
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

