import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from './services';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule
  ],
  providers: [HttpService]
})
export class SharedModule { }
