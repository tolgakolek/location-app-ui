import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DeviceTypes } from '../models/device_types.models';
@Injectable({ providedIn: 'root' })
export class DeviceTypeService {
    devices: DeviceTypes[];
    url = "http://localhost:8080/devicetpye/";
    headerDict = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'charset':'utf-8',
      }
    requestOptions = {                                                                                                                                                                                 
        headers: new HttpHeaders(this.headerDict), 
      };
     
    constructor(private http: HttpClient) {
        this.getMDeviceTypes().subscribe(data => this.devices = data);
    }

    getMDeviceTypes() : any {
        return this.http.get(this.url + "list/");
    }

    postDeviceTypes( deviceType:DeviceTypes)  {
        this.http.post(this.url, JSON.stringify(deviceType), this.requestOptions)
            .subscribe(response => {
              console.log(response);
                this.getMDeviceTypes();
                return true;
            }, error => { return false; });
    }
}

