import {Component, Input} from '@angular/core';
import {GapiService} from './gapi.service';

@Component({
	selector:'<google-signinaware>',
	template:'<div></div>'
})
export class GoogleSigninAwareComponent{

	@Input() clientId: string;
	
	cookiePolicy: string = 'single_host_origin';
	hostedDomain: string = '';
	requestedScopesArray : string[] = [];
	requestedScopes: string = '';

	signedIn : boolean;

	window : any;

	constructor(gapiService: GapiService, window : Window){
		this.window = window;
		let self = this;
		gapiService.init(window).then(function(resp : any){
			self.window.gapi.load('auth2', self.initAuth2);	
		},function(error : any){
			console.log("Error Initializing GAPI");
		});
    }

    initAuth2 = () => {
		if(!this.window.gapi || !this.clientId) return;
		let auth : any = this.window.gapi.auth2.init({
	          'client_id': this.clientId,
	          'cookie_policy': this.cookiePolicy,
	          'scope': this.requestedScopes,
	          'hosted_domain': this.hostedDomain
        });
        auth['currentUser'].listen(this.handleUserUpdate);
	}

	handleUserUpdate(newPrimaryUser: any){
		let isSignedIn = newPrimaryUser.isSignedIn();
		if(isSignedIn !== this.signedIn){
			this.signedIn = isSignedIn;	
		}
		//RESUME HERE....
	}
 
}

interface Window {
	gapi: any;
}