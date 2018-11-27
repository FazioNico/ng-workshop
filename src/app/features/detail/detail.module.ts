import { NgModule } from '@angular/core';

import { DetailRoutingModule } from './detail-routing.module';
import { ItemDetailComponent } from './containers';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [
    ItemDetailComponent
  ],
  imports: [
    SharedModule,
    DetailRoutingModule
  ]
})
export class DetailModule { }
