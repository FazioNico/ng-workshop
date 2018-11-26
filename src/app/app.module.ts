import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { LoginComponent } from './containers/login/login.component';
import { RxComponent } from './components/rx/rx.component';
import { HttpService } from './providers/http/http.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HomePageComponent,
    LoginComponent,
    RxComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
