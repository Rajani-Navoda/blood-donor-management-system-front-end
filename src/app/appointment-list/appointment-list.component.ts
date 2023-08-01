import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../_services/alert.service';
import { CampaignService } from '../_services/campaign.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit{

    public campaigns: [];

    constructor(private campaignService: CampaignService, private alertService: AlertService, private router: Router) { }

    ngOnInit(): void {
        
        this.campaignService.getCampaignsByOrganizer().subscribe(
            (response: any) => {
                if (response && response.length > 0) {
                    this.campaigns = response;
                    console.log(this.campaigns);
                }
            }
        )
    }


}
