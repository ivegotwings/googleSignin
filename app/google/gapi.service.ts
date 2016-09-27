import { Injectable } from '@angular/core';
import { ValueProvider } from '@angular/core';

@Injectable()
export class GapiService{
	constructor(window : Window){
		console.log(window);
	}
}