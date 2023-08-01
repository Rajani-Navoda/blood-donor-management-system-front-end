import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserAuthService } from '../_services/user-auth.service';
import { Router } from '@angular/router';
import { DonorService } from '../_services/donor.service';
import { DomSanitizer } from '@angular/platform-browser';
import { AlertService } from '../_services/alert.service';

@Component({
  selector: 'app-donor-registration',
  templateUrl: './donor-registration.component.html',
  styleUrls: ['./donor-registration.component.css']
})
export class DonorRegistrationComponent {

    constructor(private donorService: DonorService, private userAuthService: UserAuthService, private alertService: AlertService, private router: Router, private sanitizer: DomSanitizer) {}
    
    ngOnInit(): void {
    }

    donorRegistration(donorRegistrationForm: NgForm) {

        var formData = donorRegistrationForm.value;

        this.donorService.donorRegistration(formData).subscribe(
            (response: any)=>{
                this.router.navigate(['/donor-profile-home'])
                this.alertService.alertWithSuccess("Donor registered successfully!");
            },
            (error)=>{
                this.alertService.alertWithError("Something Went Wrong!");
                console.log(error);
            }
        );
    }

    navigateToHome() {
        this.userAuthService.clear();
        this.router.navigate(['/home']);
    }

    async onFileChange(event:any){
        const file = event.target.files[0]
        // if(file){
        //   const path = `yt/${file.name}`
        //   const uploadTask =await this.fireStorage.upload(path,file)
        //   const url = await uploadTask.ref.getDownloadURL()
        //   console.log(url)
        // }
      }

}
