import { Component, OnInit } from '@angular/core';
import { DonorService } from 'src/app/_services/donor.service';
import { UserAuthService } from 'src/app/_services/user-auth.service';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/_services/user.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/_services/alert.service';

@Component({
  selector: 'app-donorprofilesettings',
  templateUrl: './donorprofilesettings.component.html',
  styleUrls: ['./donorprofilesettings.component.css']
})
export class DonorprofilesettingsComponent implements OnInit{

    public firstName: string = "";
    public lastName: string = "";
    public fullName: string= "";
    public nic: string= "";
    public dob: string = "";
    public gender: string = "";
    public address: string = "";
    public city: string = "";
    public postalCode: string = "";
    public email: string = "";
    public contactMobile: string = "";
    public contactHome: string = "";
    public bloodGroup: string = "";
    public weight: number = 0;
    public height: number = 0;
    public bmi: number = 0;
    public specialConditions: string = "";

    constructor(private donorService: DonorService, private userAuthService: UserAuthService, private alertService: AlertService, private router: Router) {}

    ngOnInit(): void {
            
        this.donorService.getDetailsByUserName().subscribe((response:any)=>{
            this.firstName = response.user.firstName ? response.user.firstName : "";
            this.lastName = response.user.lastName ? response.user.lastName : "";
            this.fullName = response.fullName ?response.fullName : "";
            this.nic = response.nic ? response.nic : "";
            this.dob = response.dob ? response.dob : "";
            this.gender = response.gender ? response.gender : "";
            this.address = response.address ? response.address : "";
            this.city = response.city ? response.city : "";
            this.postalCode = response.postalCode ? response.postalCode : "";
            this.email = response.user.email ? response.user.email : "";
            this.contactMobile = response.contactMobile ? response.contactMobile : "";
            this.contactHome = response.contactHome ? response.contactHome : "";
            this.bloodGroup = response.bloodGroup ? response.bloodGroup : "";
            this.weight = response.weight ? response.weight : 0;
            this.height = response.height ? response.height : 0;
            this.bmi = response.bmi ? response.bmi : 0;
            this.specialConditions = response.specialConditions ? response.specialConditions : "";
        });

    }

    updateDonorDetails(updateDonorForm: NgForm) {

        var formData = updateDonorForm.value;
        console.log(formData);

        this.donorService.updateDonor(formData).subscribe(
            (response: any)=>{
                this.router.navigate(['/donor-profile-home'])
                this.alertService.alertWithSuccess("Details updated successfully!");
            },
            (error)=>{
                this.alertService.alertWithError();
            }
        );

        
    }
}

