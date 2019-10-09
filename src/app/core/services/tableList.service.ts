import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserContactTypes } from '../models/user_contact_type.models';
import { Observable } from "rxjs/Rx";

@Injectable({ providedIn: 'root' })
export class TableListService {
  userContactType: UserContactTypes[];
  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'charset': 'utf-8',
  }
  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };

  constructor(private http: HttpClient) { }

  getAll(url : string): Observable<UserContactTypes[]> {
    return this.http.get<UserContactTypes[]>(url + "list/");
  }

}

