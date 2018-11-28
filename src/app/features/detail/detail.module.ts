import { NgModule } from '@angular/core';

import { DetailRoutingModule } from './detail-routing.module';
import { ItemDetailComponent, InfoComponent } from './containers';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [
    ItemDetailComponent,
    InfoComponent
  ],
  imports: [
    SharedModule,
    DetailRoutingModule
  ]
})
export class DetailModule { }
