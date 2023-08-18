import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { FormsModule } from '@angular/forms';
import { ConcatenateUsComponent } from './components/concatenate-us/concatenate-us.component';
import { CreateCustomerComponent } from './views/create-customer/create-customer.component';
import { SlideShowComponent } from './views/home/slide-show/slide-show/slide-show.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    ConcatenateUsComponent,
    CreateCustomerComponent,
    SlideShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
