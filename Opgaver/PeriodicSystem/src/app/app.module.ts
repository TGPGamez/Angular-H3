import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PeriodicTableComponent } from './Components/periodic-table/periodic-table.component';
import { ViewElementComponent } from './Components/view-element/view-element.component';

@NgModule({
  declarations: [
    AppComponent,
    PeriodicTableComponent,
    ViewElementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
