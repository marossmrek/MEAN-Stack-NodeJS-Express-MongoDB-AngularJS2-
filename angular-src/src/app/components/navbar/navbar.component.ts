import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit  {

    constructor( private authService: AuthService,
  			   private flashMessage:FlashMessagesService, 
               private router : Router ) { }

    logout(){
    	this.authService.logout();
    	this.flashMessage.show("You are logout now", {cssClass:"alert-info", timeout:5000})
    	this.router.navigate(['/login']);
    	return false;
    }

    ngOnInit(){
     console.log(this.authService.loggedIn());
    }

}
