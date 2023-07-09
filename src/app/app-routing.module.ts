import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { MyprofileComponent } from './pages/myprofile/myprofile.component';

import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
    {path:'' , component:HomeComponent},
    {path: 'register', component:RegisterComponent},
    {path:'login' , component:LoginComponent} , 
    {path:'dashboard' , component:DashboardComponent} , 
    {path:'myaccount',component:MyprofileComponent}, 
    {path:'checkout' , component:CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
