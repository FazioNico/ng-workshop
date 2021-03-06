import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from './services';
import { HeaderComponent } from './components';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    HeaderComponent
  ],
  providers: [HttpService]
})
export class SharedModule { }
