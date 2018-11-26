import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(
    private _http: HttpClient
  ) { }

  get(url): Observable<any> {
    return this._http.get(url)
  }
}
