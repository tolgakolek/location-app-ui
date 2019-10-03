import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Sites } from '../models/sites.models';
@Injectable({ providedIn: 'root' })
export class SitesService {
    sites: any;
    url = "http://localhost:8080/site/";
    headerDict = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'charset':'utf-8',
      }
    requestOptions = {                                                                                                                                                                                 
        headers: new HttpHeaders(this.headerDict), 
      };
     
    constructor(private http: HttpClient) {
        this.getSites().subscribe(data => this.sites = data);
    }

    getSites() : any {
        return this.http.get(this.url + "list/");
    }

    postSites( site:any)  {
        this.http.post(this.url, JSON.stringify(site), this.requestOptions)
            .subscribe(response => {
                this.getSites();
                return true;
            }, error => { return false; });
    }
}

