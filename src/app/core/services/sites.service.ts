import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Sites } from '../models/sites.models';
import { Observable } from "rxjs/Rx";
import { map } from "rxjs/internal/operators";
import { SITES_PATH } from '../models/path.models';



@Injectable({ providedIn: 'root' })
export class SitesService {
    headerDict = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'charset': 'utf-8',
    }
    requestOptions = {
        headers: new HttpHeaders(this.headerDict),
    };

    constructor(private http: HttpClient) { }

    getAll(): Observable<Sites[]> {
        return this.http.get<Sites[]>(SITES_PATH + "list/");
    }

    save(sites: Sites,campusId:number): Observable<any> {
        return this.http.post(SITES_PATH+campusId.toString(), JSON.stringify(sites), this.requestOptions).pipe(map(
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

