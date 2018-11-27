import { Component, OnInit, Input } from '@angular/core';
import { INetwork } from '@app/shared/models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() items: INetwork;

  constructor() { }

  ngOnInit() {
  }

}
