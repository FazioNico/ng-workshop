import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  @Input() item: any;
  @Output() back: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  onBack(){
    this.back.emit(true)
  }
}
