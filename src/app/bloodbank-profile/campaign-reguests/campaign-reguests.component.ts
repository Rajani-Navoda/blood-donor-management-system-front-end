import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaign-reguests',
  templateUrl: './campaign-reguests.component.html',
  styleUrls: ['./campaign-reguests.component.css']
})
export class CampaignReguestsComponent implements OnInit{

  constructor(private http:HttpClient){}

  campaignDetails: any;

  ngOnInit() {
    let response =this.http.get("http://localhost:9090/getAllCampaignDetails");
    response.subscribe((data)=>this.campaignDetails=data);

  }
  
}
