import { Component, OnInit } from '@angular/core';
import { BloodBankService } from '../_services/blood-bank.service';
import { AlertService } from '../_services/alert.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { OrganizerService } from '../_services/organizer.service';
import { UserAuthService } from '../_services/user-auth.service';

@Component({
  selector: 'app-organizer-registration',
  templateUrl: './organizer-registration.component.html',
  styleUrls: ['./organizer-registration.component.css']
})
export class OrganizerRegistrationComponent implements OnInit {

    public bloodBanks: [];
    public bloodBank: number;

    constructor(private bloodBankService: BloodBankService, private organizerService: OrganizerService, private userAuthService: UserAuthService, private alertService: AlertService, private router: Router) {}

    ngOnInit(): void {
        
        this.bloodBankService.getAllBloodBanks().subscribe(
            (response: any) => {
                this.bloodBanks = response ? response : [];
                console.log(this.bloodBanks);
            }
        )
    }

    organizerRegistration(organizerRegistrationForm: NgForm) {

        var formData = organizerRegistrationForm.value;
        console.log(formData);

        this.organizerService.organizerRegistration(formData).subscribe(
            (response: any)=>{
                this.router.navigate(['/organizer-profile-home'])
                this.alertService.alertWithSuccess("Donor registered successfully!");
            },
            (error)=>{
                this.alertService.alertWithError("Something Went Wrong!");
            }
        );
    }

    navigateToHome() {
        console.log("Heeeeeeeeee");
        this.userAuthService.clear();
        this.router.navigate(['/home']);
    }

}
