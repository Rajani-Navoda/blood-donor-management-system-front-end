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
import { OrganizerNotificationsComponent } from './organizer-profile/organizer-notifications/organizer-notifications.component';
import { OrganizerSettingsComponent } from './organizer-profile/organizer-settings/organizer-settings.component';
import { ScheduleCampaignComponent } from './schedule-campaign/schedule-campaign.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { BloodAvailabilityComponent } from './blood-availability/blood-availability.component';
import { AddNewDonationComponent } from './bloodbank-profile/add-new-donation/add-new-donation.component';
import { BloodbankprofileHeaderComponent } from './bloodbank-profile/bloodbankprofile-header/bloodbankprofile-header.component';
import { CampaignReguestsComponent } from './bloodbank-profile/campaign-reguests/campaign-reguests.component';
import { DonorProfilesComponent } from './bloodbank-profile/donor-profiles/donor-profiles.component';
import { BodyCheckComponent } from './donor-profie/checkeligibility/body-check/body-check.component';
import { CantdonateComponent } from './donor-profie/checkeligibility/cantdonate/cantdonate.component';
import { CheckeligibilityComponent } from './donor-profie/checkeligibility/checkeligibility.component';
import { ColdComponent } from './donor-profie/checkeligibility/cold/cold.component';
import { HeartconditionComponent } from './donor-profie/checkeligibility/heartcondition/heartcondition.component';
import { LastDonationDateComponent } from './donor-profie/checkeligibility/last-donation-date/last-donation-date.component';
import { PregnencyComponent } from './donor-profie/checkeligibility/pregnency/pregnency.component';
import { SexComponent } from './donor-profie/checkeligibility/sex/sex.component';
import { TattoComponent } from './donor-profie/checkeligibility/tatto/tatto.component';
import { YoucandonateComponent } from './donor-profie/checkeligibility/youcandonate/youcandonate.component';
import { ContactComponent } from './donor-profie/contact/contact.component';
import { DonationHistoryComponent } from './donor-profie/donation-history/donation-history.component';
import { DonorcardComponent } from './donor-profie/donorcard/donorcard.component';
import { DonorprofileHeaderComponent } from './donor-profie/donorprofile-header/donorprofile-header.component';
import { DonorprofilesettingsComponent } from './donor-profie/donorprofilesettings/donorprofilesettings.component';
import { FAQComponent } from './donor-profie/faq/faq.component';
import { DonorRegistration2Component } from './donor-registration2/donor-registration2.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { HerosectionComponent } from './home/herosection/herosection.component';
import { MakeAppointmentComponent } from './make-appointment/make-appointment.component';
import { ContactOrganizerComponent } from './organizer-profile/contact-organizer/contact-organizer.component';
import { OrganizerprofileHeaderComponent } from './organizer-profile/organizerprofile-header/organizerprofile-header.component';
import { SendRemindersOrganizerComponent } from './organizer-profile/send-reminders-organizer/send-reminders-organizer.component';
import { BloodBankListComponent } from './blood-bank-list/blood-bank-list.component';


const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: 'donor-profile-home', component: DonorprofileHomeComponent, canActivate: [authGuard], data: { userTypes: ['donor'] }},
    { path: 'donor-registration', component: DonorRegistrationComponent, canActivate: [authGuard], data: { userTypes: ['donor'] }},
    { path: 'organizer-profile-home', component: OrganizerHomeComponent, canActivate: [authGuard], data: { userTypes: ['organizer'] }},
    { path: 'organizer-registration', component: OrganizerRegistrationComponent, canActivate: [authGuard], data: { userTypes: ['organizer'] }},
    { path: 'organizer-notifications', component: OrganizerNotificationsComponent, canActivate: [authGuard], data: { userTypes: ['organizer'] }},
    { path: 'organizer-settings', component: OrganizerSettingsComponent, canActivate: [authGuard], data: { userTypes: ['organizer'] }},
    { path: 'schedule-campaign', component: ScheduleCampaignComponent, canActivate: [authGuard], data: { userTypes: ['organizer'] }},
    { path: 'admin-home', component: AdminHomeComponent, canActivate: [authGuard], data: { userTypes: ['admin'] }},
    { path: 'admin-settings', component: AdminSettingsComponent, canActivate: [authGuard], data: { userTypes: ['admin'] }},
    { path: 'create-bloodbank', component: CreateBloodBankComponent, canActivate: [authGuard], data: { userTypes: ['admin'] }},
    { path: 'blood-bank-list', component: BloodBankListComponent, canActivate: [authGuard], data: { userTypes: ['admin'] }},
    { path: 'bloodbank-home', component: BloodbankHomeComponent, canActivate: [authGuard], data: { userTypes: ['blood-bank'] } },
    { path: 'bloodbank-settings', component: BloodbankSettingsComponent, canActivate: [authGuard], data: { userTypes: ['blood-bank'] } },
    { path: 'campaign-requests', component: CampaignReguestsComponent, canActivate: [authGuard], data: { userTypes: ['blood-bank'] }},
    { path: 'add-new-donation', component: AddNewDonationComponent, canActivate: [authGuard], data: { userTypes: ['blood-bank'] }},
    { path: 'donor-header', component: DonorprofileHeaderComponent },
    { path: 'donation-history', component: DonationHistoryComponent },
    { path: 'donor-card', component: DonorcardComponent, canActivate: [authGuard], data: { userTypes: ['donor'] }},
    { path: 'donorprofilesettings', component: DonorprofilesettingsComponent },
    { path: 'admin-dashboard', component: AdminDashboardComponent },
    { path: 'add-new-donation', component: AddNewDonationComponent },
    { path: 'google-map', component: GoogleMapComponent, canActivate: [authGuard], data: { userTypes: ['donor'] }},
    { path: 'make-appointment', component: MakeAppointmentComponent },
    { path: 'appointment-list', component: AppointmentListComponent, canActivate: [authGuard], data: { userTypes: ['organizer'] }},
    { path: 'checkeligibility', component: CheckeligibilityComponent },
    { path: 'donation-history', component: DonationHistoryComponent },
    { path: 'body-check', component: BodyCheckComponent },
    { path: 'cold', component: ColdComponent },
    { path: 'heartcondition', component: HeartconditionComponent },
    { path: 'last-donationdate', component: LastDonationDateComponent },
    { path: 'pregnency', component: PregnencyComponent },
    { path: 'sex', component: SexComponent },
    { path: 'tatto', component: TattoComponent },
    { path: 'cantdonate', component: CantdonateComponent },
    { path: 'youcandonate', component: YoucandonateComponent },
    { path: 'FAQ', component: FAQComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'send-reminders-organizers', component: SendRemindersOrganizerComponent },
    { path: 'organizer-contact', component: ContactOrganizerComponent },
    { path: 'blood-availability', component: BloodAvailabilityComponent },
    { path: 'donor-profiles', component: DonorProfilesComponent },
    { path: '**', component: ErrorPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
