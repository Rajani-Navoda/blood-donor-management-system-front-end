import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { Router } from '@angular/router';
import { AlertService } from '../_services/alert.service';
import { CampaignService } from '../_services/campaign.service';
import Swal from 'sweetalert2';
import { AppointmentService } from '../_services/appointment.service';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {

    public campaignsPresent: boolean;
    public campaigns: [];
    
    constructor(private campaignService: CampaignService, private appoinmentService: AppointmentService, private alertService: AlertService, private router: Router) { }

    ngOnInit(): void {
        this.campaignService.getNotAppointedCampaigns().subscribe(
            (response: any) => {
                if (response && response.length > 0) {
                    console.log(response);
                    this.campaigns = response;
                    this.campaignsPresent = true;
                } else {
                    this.campaignsPresent = false;
                }
            }
        )
    }

    makeAppointment(campaignId: number) {
        Swal.fire({
            title: 'Do you want to make an appointment?',
            showCancelButton: true,
            confirmButtonText: 'Yes',
          }).then((result) => {
            if (result.isConfirmed) {
                this.appoinmentService.createAppointment(campaignId).subscribe(
                    (response) => {
                        Swal.fire('Request Sent!', '', 'success');
                        this.router.navigate(['/google-map']).then(() => {
                            window.location.reload()});
                    }
                )
            }
          })
    }

}
