import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemDetailComponent } from './containers';
import { InfoComponent } from '@app/features/detail/containers/info/info.component';

const routes: Routes = [

  { path: '', redirectTo: '/index', pathMatch: 'full'},
  {
    path: ':id',
    children: [
      {
        path: '',
        component: ItemDetailComponent
      },
      {
        path: 'info',
        component: InfoComponent
      }   
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailRoutingModule { }
