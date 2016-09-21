import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { GoogleSigninComponent } from './google/googlesignin.component'

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ 
  		AppComponent,
  		GoogleSigninComponent
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
