import {Component, Input} from '@angular/core';

@Component({
	selector   : 'google-signin',
	templateUrl: './app/google/googlesignin.html',
	styleUrls  : ['./app/google/googlesignin.css'],
	inputs : ['height', 'width', 'theme', 'brand', 'needAdditionalAuth']
})

export class GoogleSigninComponent{

	signedIn : boolean = false;
	brandIcon : string = "./app/google/googlelogo.jpg";
	labelSignin : string = "Sign in";

	height: string;
	width : string;
	theme: string;
	brand: string;
	needAdditionalAuth: string;

	computeButtonClass(){
		this.height = (this.height) ? this.height : "tall";
		this.width  = (this.width)  ? this.width  : "wide";
		this.theme  = (this.theme)  ? this.theme  : "light";
		this.brand  = (this.brand)  ? this.brand  : "google";

        return "height-" + this.height + " width-" + this.width + " theme-" + this.theme + " signedIn-" + this.signedIn + " brand-" + this.brand +" additionalAuth-" + this.needAdditionalAuth; 
	}

	computeButtonIsSignIn(){
		return !this.signedIn
	}

	signIn(){
		console.log("SignIn");
	}

	signInKeyPress(e : any) {
        if (e.which == 13 || e.keyCode == 13 || e.which == 32 || e.keyCode == 32) {
          e.preventDefault();
          this.signIn();
        }
    }
}