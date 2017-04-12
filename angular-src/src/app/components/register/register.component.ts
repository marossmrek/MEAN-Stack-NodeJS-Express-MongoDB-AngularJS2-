import { Component } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private validateS : ValidateService, private flashMessage:FlashMessagesService ){

  }

  name: String;
  username: String;
  email: String;
  password: String;

  onRegisterSubmit(){

  	const user = {
  		name: this.name,
  		username: this.username,
  		email: this.email,
  		password: this.password
  	};

  	if(!this.validateS.validateRegister(user)){
  		this.flashMessage.show("Please insert all field", {cssClass:"alert-danger", timeout:3000});
  		return false;
  	};

  	if(!this.validateS.validateEmail(user.email)){
  		this.flashMessage.show("Wrong email", {cssClass:"alert-danger", timeout:3000});
  		return false;
  	};

  }

}
