import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SubUnits } from '../models/sub_units.models';
import { Observable } from "rxjs/Rx";
import { map } from "rxjs/internal/operators";
import { SUBUNIT_PATH } from '../models/path.models';

@Injectable({ providedIn: 'root' })
export class SubUnitService {
    headerDict = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'charset': 'utf-8',
    }
    requestOptions = {
        headers: new HttpHeaders(this.headerDict),
    };

    constructor(private http: HttpClient) { }

    getAll(): Observable<SubUnits[]> {
        return this.http.get<SubUnits[]>(SUBUNIT_PATH + "list/");
    }
    getById(id): Observable<SubUnits> {
        return this.http.get<SubUnits>(SUBUNIT_PATH + id);
    }

    update(subUnit: SubUnits, mainUnitId:number): Observable<any> {
        return this.http.post(SUBUNIT_PATH + mainUnitId.toString(), JSON.stringify(subUnit), this.requestOptions).pipe(map(
            res => {
                if (res) {
                    return res;
                } else {
                    return {};
                }
            }
        ));
    }
    
    save(subUnit: SubUnits, mainUnitId: number): Observable<any> {
        return this.http.post(SUBUNIT_PATH + mainUnitId.toString(), JSON.stringify(subUnit), this.requestOptions).pipe(map(
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

