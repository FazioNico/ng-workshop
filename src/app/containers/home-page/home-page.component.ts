import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { datas } from '../../datas';
import { HttpService } from '../../providers/http/http.service';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public num: number = 10;
  public totalMax: number;
  public listItem: {networks: any[]};
  public listItem$: Observable<any[]>;
  @Output() selected: EventEmitter<{}> = new EventEmitter();
  
  constructor(
    private _http: HttpService
  ) {
    this.totalMax = datas.networks.length;
    this.loadData(this.num)
  }

  ngOnInit() {
    
  }

  loadData(num: number) {
    this.num = num;
    // dynamic Observable
    this.listItem$ = this._http.get('http://api.citybik.es/v2/networks').pipe(
      map((response) => response.networks || []),
      map(data => data.slice(0, this.num)),
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
