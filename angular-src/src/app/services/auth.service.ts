import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {

  authToken : any;
  user: any;

  constructor( private http: Http ) { }

  //function send post request to our REST API register
  registerUser(user){
  	let header = new Headers(); 
  	header.append('Content-Type', 'application/json');
  	return this.http.post('http://localhost:3000/users/register', user, {headers:header}).map(res => res.json());
  }

  //function sent request to our REST API autheticate
  authenticateUser(user){
  	let header = new Headers(); 
  	header.append('Content-Type', 'application/json');
  	return this.http.post('http://localhost:3000/users/authenticate', user, {headers:header}).map(res => res.json());

  }

  //function send get request to our REST API profile, which ist protected for this we need token, which is save in local storage
  getProfile(){
  	let header = new Headers(); 
  	this.loadToken();
  	header.append('Authorization', this.authToken);
  	header.append('Content-Type', 'application/json');
  	return this.http.get('http://localhost:3000/users/profile', {headers:header}).map(res => res.json());

  }

  //function load token from local storage
  loadToken(){
  	const token = localStorage.getItem('id_token');
  	this.authToken = token;
  }

  //function from angular2- jwt check if the user is logged in
  loggedIn() {
  	this.loadToken();
  	return tokenNotExpired('id_token',this.authToken);
  }

  //function saved token and data about user to local storage
  storeUserData(token, user){
  	localStorage.setItem('id_token', token);
  	localStorage.setItem('user', JSON.stringify(user));
  	this.authToken = token;
  	this.user = user;
  }

  //function remove token and data from local sotrage
  logout(){
  	this.authToken = null;
  	this.user = null;
  	localStorage.clear();
  }

}
