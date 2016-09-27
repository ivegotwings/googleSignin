import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { GoogleSigninComponent } from './google/googlesignin.component';
import {GapiService} from './google/gapi.service';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ 
  		AppComponent,
  		GoogleSigninComponent
   ],
   providers:[
   		GapiService,
   		{provide: Window, useValue: window}
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
