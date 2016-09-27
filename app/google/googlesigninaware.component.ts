import {Component} from '@angular/core';
import {GapiService} from './gapi.service';

@Component({
	selector:'<google-signinaware>',
	template:'<div></div>'
})

export class GoogleSigninAwareComponent{
	constructor(gapi: GapiService, window : Window){
		gapi.init(window).then(function(resp : any){
			console.log("*************");
		},function(error : any){
			console.log("Error Initializing GAPI");
		});
    } 
}