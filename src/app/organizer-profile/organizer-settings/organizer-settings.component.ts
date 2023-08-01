import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/_services/alert.service';
import { OrganizerService } from 'src/app/_services/organizer.service';
import { UserAuthService } from 'src/app/_services/user-auth.service';

@Component({
  selector: 'app-organizer-settings',
  templateUrl: './organizer-settings.component.html',
  styleUrls: ['./organizer-settings.component.css']
})
export class OrganizerSettingsComponent implements OnInit {

    public firstName: string = "";
    public lastName: string = "";
    public fullName: string= "";
    public nic: string= "";
    public address: string = "";
    public email: string = "";
    public contactMobile: string = "";
    public contactHome: string = "";

    constructor(private organizerService: OrganizerService, private userAuthService: UserAuthService, private alertService: AlertService, private router: Router) {}

    ngOnInit(): void {
            
        this.organizerService.getDetailsByUserName().subscribe((response:any)=>{
            this.firstName = response.user.firstName ? response.user.firstName : "";
            this.lastName = response.user.lastName ? response.user.lastName : "";
            this.fullName = response.fullName ?response.fullName : "";
            this.nic = response.nic ? response.nic : "";
            this.address = response.address ? response.address : "";
            this.email = response.user.email ? response.user.email : "";
            this.contactMobile = response.contactMobile ? response.contactMobile : "";
            this.contactHome = response.contactHome ? response.contactHome : "";
        });

    }

    updateOrganizerDetails(updateOrganizerForm: NgForm) {
        var formData = updateOrganizerForm.value;

        this.organizerService.updateOrganizer(formData).subscribe(
            (response: any)=>{
                this.router.navigate(['/organizer-profile-home'])
                this.alertService.alertWithSuccess("Details updated successfully!");
            },
            (error)=>{
                this.alertService.alertWithError("Something Went Wrong!");
            }
        );
    }
}
