import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Rx";
import { map } from "rxjs/internal/operators";
import { Rooms } from '../models/rooms.models';
import { ROOM_PATH } from '../models/path.models';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'charset': 'utf-8',
  }
  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };

  constructor(private http: HttpClient) { }

  getAll(): Observable<Rooms[]> {
    return this.http.get<Rooms[]>(ROOM_PATH + "list/");
  }

  getById(id): Observable<Rooms> {
    return this.http.get<Rooms>(ROOM_PATH + id);
  }
  update(room: Rooms, floorId: number, typeId: number): Observable<any> {
    return this.http.post(ROOM_PATH + "type/" + typeId.toString() + "/floor/" + floorId.toString(), JSON.stringify(room), this.requestOptions).pipe(map(
      res => {
        if (res) {
          return res;
        } else {
          return {};
        }
      }
    ));
  }
  save(room: Rooms, floorId: number, typeId: number): Observable<any> {
    return this.http.post(ROOM_PATH + "type/" + typeId.toString() + "/floor/" + floorId.toString(), JSON.stringify(room), this.requestOptions).pipe(map(
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
