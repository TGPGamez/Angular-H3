import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToMorsePipe } from './pipe/to-morse.pipe';
import { ToMd5Pipe } from './Pipe/to-md5.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ToMorsePipe,
    ToMd5Pipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
