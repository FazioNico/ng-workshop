import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TNetwork } from '@app/shared/models';
import { Observable } from 'rxjs';
import { HttpService } from '@app/shared/services';
@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  item$: Observable<TNetwork>;
  @Output() back: EventEmitter<any> = new EventEmitter()
  constructor(
    private _router: ActivatedRoute,
    private _http: HttpService
  ) { }

  ngOnInit() {
    const { params: {
      id = null
    } = {} } = this._router.snapshot
    if (!id) return alert('no id');
    this._loadData(id);
  }

  private _loadData(id: string) {
    console.log('_loadData->', id)
    this.item$ = this._http.get('http://api.citybik.es/v2/networks/' + id)
    // todo: http request
  }

  onBack(){
    this.back.emit(true)
  }
}
