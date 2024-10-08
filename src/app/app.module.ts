// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListComponent } from './heroes/list/list.component';
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { DBZModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
      // Asegúrate de que MainPageComponent esté declarado
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
