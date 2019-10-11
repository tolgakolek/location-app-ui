import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserTitle } from '../models/user_title.models';
import { Observable } from "rxjs/Rx";
import { map } from "rxjs/internal/operators";
import { USERTITLE_PATH } from '../models/path.models';

@Injectable({ providedIn: 'root' })
export class UserTitleService {
  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'charset': 'utf-8',
  }
  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };

  constructor(private http: HttpClient) { }

  getAll(): Observable<UserTitle[]> {
    return this.http.get<UserTitle[]>(USERTITLE_PATH + "list/");
  }
  getById(id): Observable<UserTitle> {
    return this.http.get<UserTitle>(USERTITLE_PATH + id);
  }

  update(userTitle: UserTitle): Observable<any> {
    return this.http.post(USERTITLE_PATH, JSON.stringify(userTitle), this.requestOptions).pipe(map(
      res => {
        if (res) {
          return res;
        } else {
          return {};
        }
      }
    ));
  }
  save(userTitle: UserTitle): Observable<any> {
    return this.http.post(USERTITLE_PATH, JSON.stringify(userTitle), this.requestOptions).pipe(map(
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

