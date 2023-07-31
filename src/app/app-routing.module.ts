import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './_auth/auth.guard';

import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DonorRegistrationComponent } from './donor-registration/donor-registration.component';
import { DonorprofileHomeComponent } from './donor-profie/donorprofile-home/donorprofile-home.component';
import { OrganizerHomeComponent } from './organizer-profile/organizer-home/organizer-home.component';
import { AdminSettingsComponent } from './admin/admin-settings/admin-settings.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CreateBloodBankComponent } from './admin/create-blood-bank/create-blood-bank.component';
import { BloodbankHomeComponent } from './bloodbank-profile/bloodbank-home/bloodbank-home.component';
import { BloodbankSettingsComponent } from './bloodbank-profile/bloodbank-settings/bloodbank-settings.component';
import { OrganizerRegistrationComponent } from './organizer-registration/organizer-registration.component';


const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: 'donor-profile-home', component: DonorprofileHomeComponent, canActivate: [authGuard], data: { userTypes: ['donor'] } },
    { path: 'donor-registration', component: DonorRegistrationComponent, canActivate: [authGuard], data: { userTypes: ['donor'] } },
    { path: 'organizer-profile-home', component: OrganizerHomeComponent, canActivate: [authGuard], data: { userTypes: ['organizer'] }},
    { path: 'organizer-registration', component: OrganizerRegistrationComponent, canActivate: [authGuard], data: { userTypes: ['organizer'] } },
    { path: 'admin-home', component: AdminHomeComponent, canActivate: [authGuard], data: { userTypes: ['admin'] } },
    { path: 'admin-settings', component: AdminSettingsComponent, canActivate: [authGuard], data: { userTypes: ['admin'] } },
    { path: 'create-bloodbank', component: CreateBloodBankComponent, canActivate: [authGuard], data: { userTypes: ['admin'] } },
    { path: 'bloodbank-home', component: BloodbankHomeComponent, canActivate: [authGuard], data: { userTypes: ['blood-bank'] } },
    { path: 'bloodbank-settings', component: BloodbankSettingsComponent, canActivate: [authGuard], data: { userTypes: ['blood-bank'] } },
    { path: '**', component: ErrorPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
