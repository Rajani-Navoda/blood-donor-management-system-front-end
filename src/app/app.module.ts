import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Router, RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { HerosectionComponent } from './home/herosection/herosection.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DonorRegistrationComponent } from './donor-profie/donor-registration/donor-registration.component';
import { DonorRegistration2Component } from './donor-profie/donor-registration2/donor-registration2.component';
import { DonorprofileHeaderComponent } from './donor-profie/donorprofile-header/donorprofile-header.component';
import { DonorcardComponent } from './donor-profie/donorcard/donorcard.component';
import { DonorprofilesettingsComponent } from './donor-profie/donorprofilesettings/donorprofilesettings.component';
import { EditdonorprofileComponent } from './donor-profie/editdonorprofile/editdonorprofile.component';
import { DonationHistoryComponent } from './donor-profie/donation-history/donation-history.component';
import { AddNewDonationComponent } from './add-new-donation/add-new-donation.component';
import { OrganizerprofileHeaderComponent } from './organizerprofile-header/organizerprofile-header.component';
import { BloodbankprofileHeaderComponent } from './bloodbankprofile-header/bloodbankprofile-header.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './home/home.component';
import { DonorProfieComponent } from './donor-profie/donor-profie.component';


const appRoute: Routes = [
{path:'', component:HomeComponent},
 // {path:'', redirectTo:'herosection', pathMatch:'full'},
 {path:'herosection', component: HerosectionComponent},
 {path:'add-new-donation', component: AddNewDonationComponent},
 {path:'admin-dashboard', component: AdminDashboardComponent},
 {path:'login', component:LoginComponent},
 {path:'Signup',component:SignupComponent},
 {path:'donorProfile',component:DonorProfieComponent},
 {path:'donor-header', component:DonorprofileHeaderComponent},
 {path:'donation-history', component:DonationHistoryComponent},
 {path:'donor-registration', component:DonorRegistrationComponent},
 {path:'donor-registration2',component:DonorRegistration2Component},
 {path:'donorcard', component:DonorcardComponent},
 {path:'donorprofilesettings', component:DonorprofilesettingsComponent},
 {path:'editdonorprofile', component:EditdonorprofileComponent},
 {path:'organizerprofile-header',component:OrganizerprofileHeaderComponent},
 {path:'bloodbankprofile-header',component:BloodbankprofileHeaderComponent},
 {path:'admin-dashboard', component:AdminDashboardComponent},
 {path:'add-new-donation', component:AddNewDonationComponent}

]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HerosectionComponent,
    LoginComponent,
    SignupComponent,
    DonorRegistrationComponent,
    DonorRegistration2Component,
    DonorprofileHeaderComponent,
    DonorcardComponent,
    DonorprofilesettingsComponent,
    EditdonorprofileComponent,
    DonationHistoryComponent,
    AddNewDonationComponent,
    OrganizerprofileHeaderComponent,
    BloodbankprofileHeaderComponent,
    AdminDashboardComponent,
    HomeComponent,
    DonorProfieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
