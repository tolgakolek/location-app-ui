import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({ providedIn: 'root' })
export class SitesService {
    sites: any;
    constructor(private http: HttpClient) {
        this.getSites().subscribe(data => this.sites = data);
    }

    getSites() : any {
        return this.http.get("http://localhost:8080/site/list/");
    }
}

