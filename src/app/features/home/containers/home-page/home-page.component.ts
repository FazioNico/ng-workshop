import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from '@app/shared/services';
import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { INetwork, IApiResponse } from '@app/shared/models/network/network.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public num: number = 10;
  public totalMax: number;
  public listItem: {networks: INetwork[]};
  public listItem$: Observable<INetwork[]>;
  public apiError: Error;
  @Output() selected: EventEmitter<{}> = new EventEmitter();
  
  constructor(
    private _http: HttpService
  ) {
    // this.totalMax = datas.networks.length;
    this.loadData(this.num)
  }

  ngOnInit() {
    
  }

  /**
   * Methode to load datas store bike from API 
   * + filter by params `num`
   * @param num Number
   */
  loadData(num: number) {
    // number assignation with +
    this.num = +num;
    // dynamic Observable
    this.listItem$ = this._http.get('http://api.citybik.es/v2/networks').pipe(
      // count total of api respons networks
      // map((response: IApiResponse) => (this.totalMax = response.networks.length, response) ),
      tap((response: IApiResponse) => this.totalMax = response.networks.length),
      // select only `.networks` props
      map((response: IApiResponse) => response.networks || []),
      // filter by `num`
      map((data: INetwork[]) => data.slice(0, this.num)),
      //  do not forget to handle errors
      catchError(err => (this.apiError = err, []))
    );
  }

  select(item) {
    this.selected.emit(item)
  }
}
