import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/users.models';


@Injectable({ providedIn: 'root' })
export class UserProfileService {
    headerDict = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'charset': 'utf-8',
    };

    requestOptions = {
        headers: new HttpHeaders(this.headerDict),
    };

    constructor(private http: HttpClient) { }
    
    
}