import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { HerosectionComponent } from './home/herosection/herosection.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DonorRegistrationComponent } from './donor-registration/donor-registration.component';
import { DonorRegistration2Component } from './donor-registration2/donor-registration2.component';
import { DonorprofileHeaderComponent } from './donor-profie/donorprofile-header/donorprofile-header.component';
import { DonorcardComponent } from './donor-profie/donorcard/donorcard.component';
import { DonorprofilesettingsComponent } from './donor-profie/donorprofilesettings/donorprofilesettings.component';
import { DonationHistoryComponent } from './donor-profie/donation-history/donation-history.component';
import { AddNewDonationComponent } from './bloodbank-profile/add-new-donation/add-new-donation.component';
import { OrganizerprofileHeaderComponent } from './organizer-profile/organizerprofile-header/organizerprofile-header.component';
import { BloodbankprofileHeaderComponent } from './bloodbank-profile/bloodbankprofile-header/bloodbankprofile-header.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './home/home.component';
import { DonorProfieComponent } from './donor-profie/donor-profie.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { GoogleMapComponent } from './google-map/google-map.component';
import { MakeAppointmentComponent } from './make-appointment/make-appointment.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { ScheduleCampaignComponent } from './schedule-campaign/schedule-campaign.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { DonorprofileHomeComponent } from './donor-profie/donorprofile-home/donorprofile-home.component';
import { CheckeligibilityComponent } from './donor-profie/checkeligibility/checkeligibility.component';
import { HeartconditionComponent } from './donor-profie/checkeligibility/heartcondition/heartcondition.component';
import { PregnencyComponent } from './donor-profie/checkeligibility/pregnency/pregnency.component';
import { LastDonationDateComponent } from './donor-profie/checkeligibility/last-donation-date/last-donation-date.component';
import { BodyCheckComponent } from './donor-profie/checkeligibility/body-check/body-check.component';
import { TattoComponent } from './donor-profie/checkeligibility/tatto/tatto.component';
import { SexComponent } from './donor-profie/checkeligibility/sex/sex.component';
import { ColdComponent } from './donor-profie/checkeligibility/cold/cold.component';
import { CantdonateComponent } from './donor-profie/checkeligibility/cantdonate/cantdonate.component';
import { YoucandonateComponent } from './donor-profie/checkeligibility/youcandonate/youcandonate.component';
import { FAQComponent } from './donor-profie/faq/faq.component';
import { ContactComponent } from './donor-profie/contact/contact.component';
import { OrganizerProfileComponent } from './organizer-profile/organizer-profile.component';
import { OrganizerHomeComponent } from './organizer-profile/organizer-home/organizer-home.component';
import { SendRemindersOrganizerComponent } from './organizer-profile/send-reminders-organizer/send-reminders-organizer.component';
import { OrganizerNotificationsComponent } from './organizer-profile/organizer-notifications/organizer-notifications.component';
import { OrganizerSettingsComponent } from './organizer-profile/organizer-settings/organizer-settings.component';
import { ContactOrganizerComponent } from './organizer-profile/contact-organizer/contact-organizer.component';
import { BloodAvailabilityComponent } from './blood-availability/blood-availability.component';
import { BloodbankProfileComponent } from './bloodbank-profile/bloodbank-profile.component';
import { BloodbankHomeComponent } from './bloodbank-profile/bloodbank-home/bloodbank-home.component';
import { CampaignReguestsComponent } from './bloodbank-profile/campaign-reguests/campaign-reguests.component';
import { DonorProfilesComponent } from './bloodbank-profile/donor-profiles/donor-profiles.component';
import { BloodbankSettingsComponent } from './bloodbank-profile/bloodbank-settings/bloodbank-settings.component';
import { CreateBloodBankComponent } from './admin/create-blood-bank/create-blood-bank.component';
import { AdminSettingsComponent } from './admin/admin-settings/admin-settings.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { OrganizerRegistrationComponent } from './organizer-registration/organizer-registration.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BloodBankListComponent } from './blood-bank-list/blood-bank-list.component';

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
        DonationHistoryComponent,
        AddNewDonationComponent,
        OrganizerprofileHeaderComponent,
        BloodbankprofileHeaderComponent,
        AdminDashboardComponent,
        HomeComponent,
        DonorProfieComponent,
        GoogleMapComponent,
        MakeAppointmentComponent,
        AppointmentListComponent,
        ScheduleCampaignComponent,
        ErrorPageComponent,
        DonorprofileHomeComponent,
        CheckeligibilityComponent,
        HeartconditionComponent,
        PregnencyComponent,
        LastDonationDateComponent,
        BodyCheckComponent,
        TattoComponent,
        SexComponent,
        ColdComponent,
        CantdonateComponent,
        YoucandonateComponent,
        FAQComponent,
        ContactComponent,
        OrganizerProfileComponent,
        OrganizerHomeComponent,
        SendRemindersOrganizerComponent,
        OrganizerNotificationsComponent,
        OrganizerSettingsComponent,
        ContactOrganizerComponent,
        BloodAvailabilityComponent,
        BloodbankProfileComponent,
        BloodbankHomeComponent,
        CampaignReguestsComponent,
        DonorProfilesComponent,
        BloodbankSettingsComponent,
        AdminSettingsComponent,
        AdminComponent,
        AdminHomeComponent,
        OrganizerRegistrationComponent,
        CreateBloodBankComponent,
        BloodBankListComponent
    ],
    
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        GoogleMapsModule,
        HttpClientModule,
        FormsModule,                             
        ReactiveFormsModule 
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
