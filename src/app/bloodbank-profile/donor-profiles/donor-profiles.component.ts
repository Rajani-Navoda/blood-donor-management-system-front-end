import { Component, OnInit } from '@angular/core';
import { Donor, Gender, BloodGroup} from '../../donor';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-donor-profiles',
  templateUrl: './donor-profiles.component.html',
  styleUrls: ['./donor-profiles.component.css']
})
export class DonorProfilesComponent implements OnInit{

  Donors: Donor[] = [];

  constructor(){

  }
  ngOnInit(): void {
   
  }


} 
