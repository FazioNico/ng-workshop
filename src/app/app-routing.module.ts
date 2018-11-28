import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppAuthGuard } from '@app/app-auth.guard';
import { AppNoAuthGuard } from '@app/app-noauth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  {
    path: 'index',
    loadChildren: './features/home/home.module#HomeModule',
    canActivate: [AppNoAuthGuard]
  },
  {
    path: 'auth',
    loadChildren: './features/auth/auth.module#AuthModule',
    canActivate: [AppAuthGuard]
  },
  {
    path: 'details',
    loadChildren: './features/detail/detail.module#DetailModule',
    canActivate: [AppNoAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
