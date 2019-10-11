import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Rx";
import { map } from "rxjs/internal/operators";
import { Devices } from '../models/devices.models';
import { DeviceTypeRoutingModule } from 'src/app/pages/devicetype/devicetype-routing';
import { DEVİCE_PATH } from '../models/path.models';



@Injectable({ providedIn: 'root' })
export class DeviceService {

  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'charset': 'utf-8',
  }
  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Devices[]> {
    return this.http.get<Devices[]>(DEVİCE_PATH + "list/");
  }

  getById(id): Observable<Devices> {
    return this.http.get<Devices>(DEVİCE_PATH + "{id}?id="+ id);
  }
  update(device: Devices, deviceTypeId: number): Observable<any> {
    return this.http.post(DEVİCE_PATH + deviceTypeId.toString(), JSON.stringify(device), this.requestOptions).pipe(map(
      res => {
        if (res) {
          return res;
        } else {
          return {};
        }
      }
    ));
  }
  save(device: Devices, deviceTypeId: number): Observable<any> {
    return this.http.post(DEVİCE_PATH + deviceTypeId.toString(), JSON.stringify(device), this.requestOptions).pipe(map(
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

