import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable()
export class HttpService {

  public datas: any;

  constructor(
    private _http: HttpClient
  ) { }

  get(url): Observable<any> {
    if (this.datas) return of(this.datas);
    // only do it if don have `datas` proprets defind.
    return this._http.get(url).pipe(
      tap(response => this.datas = response)
    )
  }
}
