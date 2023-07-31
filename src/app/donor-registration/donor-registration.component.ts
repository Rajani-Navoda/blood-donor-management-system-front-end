import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { UserAuthService } from '../_services/user-auth.service';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { DonorService } from '../_services/donor.service';
import { FileHandle } from '../_models/file-handle.model';
import { DomSanitizer } from '@angular/platform-browser';
import { AlertService } from '../_services/alert.service';
import {AngularFireStorage} from '@angular/fire/compat/storage';

@Component({
  selector: 'app-donor-registration',
  templateUrl: './donor-registration.component.html',
  styleUrls: ['./donor-registration.component.css']
})
export class DonorRegistrationComponent {

    constructor(private donorService: DonorService, private userAuthService: UserAuthService, private alertService: AlertService, private router: Router, private sanitizer: DomSanitizer,private fireStorage: AngularFireStorage) {}
    
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
                this.alertService.alertWithError();
                console.log(error);
            }
        );
    }

    // onFileSelected(event: any) {
    //     if(event.target.files) {
    //         const file: File =  event.target.files[0];

    //         const fileHandle: FileHandle {
    //             file: file,
    //             url: this.sanitizer.byPassSecurityTrustUrl(
    //                 window.URL.createObjectURL(file)
    //             )
    //         }
    //     }
    // }

    navigateToHome() {
        this.userAuthService.clear();
        this.router.navigate(['/home']);
    }

 

    //image uploading
    async onFileChange(event:any){
        const file = event.target.files[0]
        if(file){
         const path =`yt/${file.name}`
         const uploadTask =  await this.fireStorage.upload(path, file)
         const url = await uploadTask.ref.getDownloadURL()
         console.log(url)
        }
    }

}
