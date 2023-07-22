import { Component, OnInit } from '@angular/core';
import { Donor, Gender, BloodGroup} from '../../donor';
import { first } from 'rxjs';
import { DonorService } from '../../donor.service';



@Component({
  selector: 'app-donor-profiles',
  templateUrl: './donor-profiles.component.html',
  styleUrls: ['./donor-profiles.component.css']
})
export class DonorProfilesComponent implements OnInit{

  Donors: Donor[] = [];

  constructor(private donorService: DonorService){

  }
  ngOnInit(): void {
   this.getDonors();
  }

  private getDonors(){
    this.donorService.getDonorsList().subscribe(data=>{
      this.Donors=data;
    });
  }
} 
