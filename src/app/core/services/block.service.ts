import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Block } from '../models/block.models';
import { Observable } from "rxjs/Rx";
import { map } from "rxjs/internal/operators";
import { BLOCK_PATH } from '../models/path.models';


@Injectable({
  providedIn: 'root'
})
export class BlockService {
  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'charset': 'utf-8',
  }
  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Block[]> {
    return this.http.get<Block[]>(BLOCK_PATH + "list/");
  }

  save(block: Block,buildId:number): Observable<any> {
    return this.http.post(BLOCK_PATH+buildId.toString(), JSON.stringify(block), this.requestOptions).pipe(map(
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
