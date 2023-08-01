import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BloodBankService } from '../_services/blood-bank.service';
import { CampaignService } from '../_services/campaign.service';
import { AlertService } from '../_services/alert.service';

@Component({
  selector: 'app-schedule-campaign',
  templateUrl: './schedule-campaign.component.html',
  styleUrls: ['./schedule-campaign.component.css']
})
export class ScheduleCampaignComponent implements OnInit {
    
    public bloodBanks: [];

    constructor(private bloodBankService: BloodBankService, private campaignService: CampaignService, private alertService: AlertService, private router: Router) {}

    ngOnInit(): void {
        
        this.bloodBankService.getAllBloodBanks().subscribe(
            (response: any) => {
                this.bloodBanks = response ? response : [];
            }
        )
    }

    campaignRegistration(requestCampaignForm: NgForm) {
        var formData = requestCampaignForm.value;
        console.log(formData);

        this.campaignService.addCampaign(formData).subscribe(
            (response: any)=>{
                this.router.navigate(['/organizer-profile-home'])
                this.alertService.alertWithSuccess("Campaign registered successfully!");
            },
            (error)=>{
                this.alertService.alertWithError("Something Went Wrong!");
            }
        );
    }
}
