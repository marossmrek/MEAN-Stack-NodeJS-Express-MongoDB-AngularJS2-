import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  username:String;
  password:String;

  constructor( private authService: AuthService,
  			   private flashMessage:FlashMessagesService, 
               private router : Router ) { }

  onLoginSubmit(){

  	const user = {
  		username : this.username,
  		password : this.password
  	};

  	this.authService.authenticateUser(user).subscribe(data => {
  		if(data.success){
  			this.authService.storeUserData(data.token, data.user);
  			this.flashMessage.show("You are success login", {cssClass:"alert-success", timeout:5000});
	        this.router.navigate(['dashboard']);

  		} else{
	  	    this.flashMessage.show(data.msg, {cssClass:"alert-danger", timeout:5000});
	        this.router.navigate(['login']);
  		}
  	});
  };
}
