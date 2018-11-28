import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from '@app/core/core.module';
import { AppAuthGuard } from '@app/app-auth.guard';
import { AppNoAuthGuard } from '@app/app-noauth.guard';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [
    AppAuthGuard,
    AppNoAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
