import { Injectable } from '@angular/core';
import { ValueProvider } from '@angular/core';

@Injectable()
export class GapiService{
	window : Window;

	init : any = function(window: Window){
		return new Promise(function(resolve, reject){
			(<any>window).initializeGapi =  function(){
				resolve();	
			};
			let api : any = document.createElement('script');
			api.src = "https://apis.google.com/js/api.js?onload=initializeGapi"
			document.body.appendChild(api);
		});
	}
}