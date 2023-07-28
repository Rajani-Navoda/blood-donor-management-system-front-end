import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DonorRegistrationComponent } from './donor-registration/donor-registration.component';
import { DonorprofileHomeComponent } from './donor-profie/donorprofile-home/donorprofile-home.component';
import { OrganizerHomeComponent } from './organizer-profile/organizer-home/organizer-home.component';
import { authGuard } from './_auth/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: 'donor-profile-home', component: DonorprofileHomeComponent, canActivate:[authGuard], data:{userTypes:['donor']} },
    { path: 'donor-registration', component: DonorRegistrationComponent, canActivate:[authGuard], data:{userTypes:['donor']} },
    { path: 'organizer-profile-home', component: OrganizerHomeComponent},
    // { path: 'organizer-registration', component: DonorRegistrationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
