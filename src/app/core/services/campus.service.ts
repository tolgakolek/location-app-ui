import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Campus } from '../models/campus.models';
import { Observable } from "rxjs/Rx";
import { map } from "rxjs/internal/operators";

const CAMPUS_PATH = "http://localhost:8080/campus/";

@Injectable({ providedIn: 'root' })
export class CampusService {
    headerDict = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'charset': 'utf-8',
    };

    requestOptions = {
        headers: new HttpHeaders(this.headerDict),
    };

    constructor(private http: HttpClient) { }

    getAll(): Observable<Campus[]> {
        return this.http.get<Campus[]>(CAMPUS_PATH + "list/");
    }

    save(campus: Campus): Observable<any> {
        return this.http.post(CAMPUS_PATH, JSON.stringify(campus),this.requestOptions).pipe(map(
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

