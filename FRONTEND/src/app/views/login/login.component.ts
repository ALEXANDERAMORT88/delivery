import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']


})


export class LoginComponent {

forgotPassword:boolean = false 


 btnForgotPassword () {
  this.forgotPassword = !this.forgotPassword
 }


}

