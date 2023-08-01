import { Component, OnInit } from '@angular/core';
import { DonorService } from 'src/app/_services/donor.service';

@Component({
  selector: 'app-donorcard',
  templateUrl: './donorcard.component.html',
  styleUrls: ['./donorcard.component.css']
})
export class DonorcardComponent implements OnInit {

    public path: string;
    public firstName: string;
    public lastName: string;
    public registrationNumber: string;
    public bloodGroup: string;

    constructor(private donorService: DonorService) {}

    ngOnInit(): void {
        this.donorService.getPathToQrCode().subscribe(
            (response: any) => {
                if (response) {
                    this.path = response;
                }
            }
        );

        this.donorService.getDetailsByUserName().subscribe((response:any)=> {
            if(response) {
                this.firstName = response.user.firstName ? response.user.firstName : "";
                this.lastName = response.user.lastName ? response.user.lastName : "";
                this.registrationNumber = response.registrationNumber ? response.registrationNumber : "";
                this.bloodGroup = response.bloodGroup ? response.bloodGroup : "";
            }
        })
    }

    

}
