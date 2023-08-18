import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SlideShowComponent } from './slide-show/slide-show/slide-show.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router:Router) {}

  navigateToCreateCustomer(){
    this.router.navigate(['creater-customer']);
  };

  isContentVisible: boolean = true;

  hidenContent() {
    this.isContentVisible = false;
  };
  slideshowComponent = new SlideShowComponent();
}

