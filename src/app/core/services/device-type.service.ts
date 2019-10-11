import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DeviceTypes } from '../models/device_types.models';
import { Observable } from "rxjs/Rx";
import { map } from "rxjs/internal/operators";
import { DEVİCETYPE_PATH } from '../models/path.models';



@Injectable({ providedIn: 'root' })
export class DeviceTypeService {

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

  getAll(): Observable<DeviceTypes[]> {
    return this.http.get<DeviceTypes[]>(DEVİCETYPE_PATH + "list/");
  }
  getById(id): Observable<DeviceTypes> {
      return this.http.get<DeviceTypes>(DEVİCETYPE_PATH + id);
  }

  update(deviceType: DeviceTypes): Observable<any>  {
      return this.http.post(DEVİCETYPE_PATH, JSON.stringify(deviceType), this.requestOptions).pipe(map(
          res => {
              if (res) {
                  return res;
              } else {
                  return {};
              }
          }
      ));
  }

  save(deviceTypes: DeviceTypes): Observable<any> {
    return this.http.post(DEVİCETYPE_PATH, JSON.stringify(deviceTypes), this.requestOptions).pipe(map(
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

