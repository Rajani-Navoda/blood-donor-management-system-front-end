import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-schedule-campaign',
  templateUrl: './schedule-campaign.component.html',
  styleUrls: ['./schedule-campaign.component.css']
})
export class ScheduleCampaignComponent {

  onSubmit(form: NgForm){
    console.log(form);
  }
}
