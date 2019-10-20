import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Rx";
import { map } from "rxjs/internal/operators";
import { USER_PATH } from '../models/path.models';
import { User } from '../models/users.models';

@Injectable({ providedIn: 'root' })
export class UserService {
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

    getAll(): Observable<User[]> {
        return this.http.get<User[]>(USER_PATH + "list/");
    }
    getById(id): Observable<User> {
        return this.http.get<User>(USER_PATH + id);
    }

    update(site: User, userTitleId: number): Observable<any> {
        return this.http.post(USER_PATH + userTitleId.toString(), JSON.stringify(site), this.requestOptions).pipe(map(
            res => {
                if (res) {
                    return res;
                } else {
                    return {};
                }
            }
        ));
    }
    save(site: User, userTitleId: number): Observable<any> {
        return this.http.post(USER_PATH + userTitleId.toString(), JSON.stringify(site), this.requestOptions).pipe(map(
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

