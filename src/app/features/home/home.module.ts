import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from '@app/features/home/containers/home-page/home-page.component';
import { SharedModule } from '@app/shared/shared.module';
import { ListComponent } from '@app/features/home/components/list/list.component';

@NgModule({
  declarations: [
    HomePageComponent,
    ListComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
