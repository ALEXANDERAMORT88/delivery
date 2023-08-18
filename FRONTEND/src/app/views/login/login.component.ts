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


};

// export class loginProcess {
// email: string = '';
// password: string = '';

// constructor(private authService: AuthService, private router: Router) {}

// }

