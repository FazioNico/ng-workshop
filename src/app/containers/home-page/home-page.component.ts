import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { datas } from '../../datas';
import { HttpService } from '../../providers/http/http.service';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { INetwork, IApiResponse } from '../../models/network/network.model';

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
  @Output() selected: EventEmitter<{}> = new EventEmitter();
  
  constructor(
    private _http: HttpService
  ) {
    this.totalMax = datas.networks.length;
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
    this.num = num;
    // dynamic Observable
    this.listItem$ = this._http.get('http://api.citybik.es/v2/networks').pipe(
      // count total of api respons networks
      map((response: IApiResponse) => (this.totalMax = response.networks.length, response) ),
      // select only `.networks` props
      map((response: IApiResponse) => response.networks || []),
      // filter by `num`
      map(data => data.slice(0, this.num)),
      //  do not forget to handle errors
      catchError(err => (console.log(err), []))
    );
  
    // static
    const networks = datas.networks.slice(0, this.num)
    this.listItem = {networks};
  }

  select(item) {
    this.selected.emit(item)
  }
}
