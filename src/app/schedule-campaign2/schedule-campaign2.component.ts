import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-schedule-campaign2',
  templateUrl: './schedule-campaign2.component.html',
  styleUrls: ['./schedule-campaign2.component.css']
})
export class ScheduleCampaign2Component {

  onSubmit(form: NgForm){
    console.log(form);
  }

}
