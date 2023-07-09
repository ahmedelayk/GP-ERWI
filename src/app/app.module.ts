import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { RegisterComponent } from './pages/register/register.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';

import { AuthInterceptor } from './services/interceptor/auth.interceptor';
import { MyprofileComponent } from './pages/myprofile/myprofile.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {NgbPaginationModule, NgbAccordionModule , NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';

// firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    MyprofileComponent,
    HomeComponent,
    CheckoutComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule , 
    FormsModule , 
    ReactiveFormsModule ,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    NgbPaginationModule,NgbModule,
    NgbAccordionModule,
    NgbPaginationModule,
    NgbCarouselModule,
    AngularFireModule.initializeApp(environment.firebase1),
    // AngularFireModule.initializeApp(environment.firebase2),
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    
    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({
        // set defaults here
        radius: 80,
        outerStrokeWidth: 16,
        innerStrokeWidth: 8,
        outerStrokeColor: "#78C000",
        innerStrokeColor: "#C7E596",
      })
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS , useClass:AuthInterceptor, multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
