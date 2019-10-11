import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Campus } from '../models/campus.models';
import { Observable } from "rxjs/Rx";
import { map } from "rxjs/internal/operators";
import { CAMPUS_PATH } from '../models/path.models';

@Injectable({ providedIn: 'root' })
export class CampusService {
    headerDict = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'charset': 'utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    };

    requestOptions = {
        headers: new HttpHeaders(this.headerDict),
    };

    constructor(private http: HttpClient) { }

    getAll(): Observable<Campus[]> {
        return this.http.get<Campus[]>(CAMPUS_PATH + "list/");
    }
    getById(id): Observable<Campus> {
        return this.http.get<Campus>(CAMPUS_PATH + id);
    }

    update(campus: Campus): Observable<any> {
        return this.http.post(CAMPUS_PATH, JSON.stringify(campus), this.requestOptions).pipe(map(
            res => {
                if (res) {
                    return res;
                } else {
                    return {};
                }
            }
        ));
    }

    save(campus: Campus): Observable<any> {
        return this.http.post(CAMPUS_PATH, JSON.stringify(campus), this.requestOptions).pipe(map(
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

