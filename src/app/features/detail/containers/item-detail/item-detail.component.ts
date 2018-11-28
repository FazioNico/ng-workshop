import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  id: string

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _http: HttpService
  ) { }

  ngOnInit() {
    const { params: {
      id = null
    } = {} } = this._route.snapshot
    if (!id) return alert('no id');
    this.id = id;
    this._loadData(id);
  }

  private _loadData(id: string) {
    console.log('_loadData->', id)
    this.item$ = this._http.get('http://api.citybik.es/v2/networks/' + id)
    // todo: http request
  }

  navigate(url: string){
    switch (true) {
      case url === 'back':
        this._router.navigate(['index'])
        break;
      case url === 'info':
        this._router.navigate([`details/${this.id}/info`])
        break;
      default:
        break;
    }
  }
}
