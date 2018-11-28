import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppAuthGuard } from '@app/app-auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  {
    path: 'index',
    loadChildren: './features/home/home.module#HomeModule'
  },
  {
    path: 'auth',
    loadChildren: './features/auth/auth.module#AuthModule',
    canActivate: [AppAuthGuard]
  },
  {
    path: 'details',
    loadChildren: './features/detail/detail.module#DetailModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
