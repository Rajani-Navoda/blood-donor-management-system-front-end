import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/_services/alert.service';
import { CampaignService } from 'src/app/_services/campaign.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-campaign-reguests',
    templateUrl: './campaign-reguests.component.html',
    styleUrls: ['./campaign-reguests.component.css']
})
export class CampaignReguestsComponent implements OnInit {

    public campaignRequestsPresent: boolean;
    public campaigns: [];
    public approvedCampaignId: number;

    constructor(private campaignService: CampaignService, private alertService: AlertService, private router: Router) { }

    ngOnInit() {

        this.campaignService.getPendingCampaigns().subscribe(
            (response: any) => {
                if (response && response.length > 0) {
                    this.campaigns = response;
                    this.campaignRequestsPresent = true;
                } else {
                    this.campaignRequestsPresent = false;
                }
            }
        )
    }

    approveRequest(campaignId: number) {

        Swal.fire({
            title: 'Do you want to approve the Request?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Approve',
            denyButtonText: `Don't Approve`,
          }).then((result) => {
            if (result.isConfirmed) {
                this.campaignService.approveRequest(campaignId).subscribe(
                    (response) => {
                        Swal.fire('Approved!', '', 'success');
                        this.router.navigate(['/campaign-requests']).then(() => {
                            window.location.reload()});
                    }
                )
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          })
    }

}
