import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Rx";
import { map } from "rxjs/internal/operators";
import { Devices } from '../models/devices.models';
import { DeviceTypeRoutingModule } from 'src/app/pages/devicetype/devicetype-routing';

const DEVİCETYPE_PATH = "http://localhost:8080/device/";

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
    return this.http.get<Devices[]>(DEVİCETYPE_PATH + "list/");
  }

  save(device: Devices,deviceTypeId:number): Observable<any> {
    return this.http.post(DEVİCETYPE_PATH+deviceTypeId.toString(), JSON.stringify(device), this.requestOptions).pipe(map(
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

