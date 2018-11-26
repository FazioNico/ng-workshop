import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { ItemDetailComponent } from './containers';
import { HttpService } from './services';

@NgModule({
  declarations: [
    ItemDetailComponent
  ],
  providers: [HttpService],
  imports: [
    CommonModule,
    DetailRoutingModule
  ]
})
export class DetailModule { }
