import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './page/main-page.component';



@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule
  ],
  exports:[MainPageComponent]
})
export class DBZModule { }
