import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RoomType } from '../models/room_types.models';
@Injectable({ providedIn: 'root' })
export class RoomTypeService {
    roomTypes: RoomType[];
    url = "http://localhost:8080/roomtype/";
    headerDict = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'charset':'utf-8',
      }
    requestOptions = {                                                                                                                                                                                 
        headers: new HttpHeaders(this.headerDict), 
      };
     
    constructor(private http: HttpClient) {
        this.getRoomTypes().subscribe(data => this.roomTypes = data);
    }

    getRoomTypes() : any {
        return this.http.get(this.url + "list/");
    }

    postRoomTypes( roomType:RoomType)  {
        this.http.post(this.url, JSON.stringify(roomType), this.requestOptions)
            .subscribe(response => {
              console.log(response);
                this.getRoomTypes();
                return true;
            }, error => { return false; });
    }
}

