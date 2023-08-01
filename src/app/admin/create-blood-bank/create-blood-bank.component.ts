import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/_services/alert.service';
import { BloodBankService } from 'src/app/_services/blood-bank.service';

@Component({
  selector: 'app-create-blood-bank',
  templateUrl: './create-blood-bank.component.html',
  styleUrls: ['./create-blood-bank.component.css']
})
export class CreateBloodBankComponent {

    constructor(private bloodBankService: BloodBankService, private alertService: AlertService, private router: Router, private sanitizer: DomSanitizer) {}

    createBloodBank(bloodBankCreationForm: NgForm) {
        
        var formData = bloodBankCreationForm.value;
        console.log(formData);

        this.bloodBankService.createBloodBank(formData).subscribe(
            (response: any)=>{
                this.router.navigate(['/admin-home'])
                this.alertService.alertWithSuccess("Blood Bank added successfully!");
            },
            (error)=>{
                this.alertService.alertWithError("Something Went Wrong!");
            }
        );
    }

}
