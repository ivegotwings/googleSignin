import {Component, Input, OnInit} from '@angular/core';
import {GoogleSigninConfiguration} from './googlesignin.configuration'

@Component({
	selector   : 'google-signin',
	templateUrl: './app/google/googlesignin.html',
	styleUrls  : ['./app/google/googlesignin.css'],
})

export class GoogleSigninComponent implements OnInit{

	signedIn : boolean = false;
	brandIcon : string = "";
	labelSignin : string = "";

	@Input() height: string;
	@Input() width : string;
	@Input() theme: string;
	@Input() brand: string;
    
    ngOnInit(){
      this.height = (this.height) ? this.height : "standard";
      this.width  = (this.width)  ? this.width  : "wide";
      this.theme  = (this.theme)  ? this.theme  : "light";
      this.brand  = (this.brand)  ? this.brand  : "google-plus";
    	this.brandIcon   = this.computeIcon(this.brand);
    	this.labelSignin = this.computeSigninLabel(this.width, this.brand);
    }

   	computeSigninLabel(width : any, brand : any) {
      switch(width) {
        case GoogleSigninConfiguration.WidthValue.WIDE:
          return (brand == GoogleSigninConfiguration.BrandValue.PLUS) ?
                  GoogleSigninConfiguration.LabelValue.WIDE_PLUS : GoogleSigninConfiguration.LabelValue.WIDE;
        
        case GoogleSigninConfiguration.WidthValue.STANDARD:
          return GoogleSigninConfiguration.LabelValue.STANDARD;

        case GoogleSigninConfiguration.WidthValue.ICON_ONLY:
          return '';
        
        default:
          console.warn("bad width value: ", width);
          return GoogleSigninConfiguration.LabelValue.STANDARD;
      }
  	}

    computeIcon(brand : any) {
        return "./app/google/" + brand + ".png";
      }

  	computeButtonClass(){
        return "height-" + this.height + " width-" + this.width + " theme-" + this.theme + " signedIn-" + this.signedIn + " brand-" + this.brand; 
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