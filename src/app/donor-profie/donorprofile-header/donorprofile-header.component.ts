import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';
import { DonorService } from 'src/app/_services/donor.service';
import { UserAuthService } from 'src/app/_services/user-auth.service';



@Component({
  selector: 'app-donorprofile-header',
  templateUrl: './donorprofile-header.component.html',
  styleUrls: ['./donorprofile-header.component.css']
})
export class DonorprofileHeaderComponent implements OnInit{

    constructor(private userAuthService: UserAuthService, private router: Router, private donorService: DonorService) {}

    public firstName: string;
    public lastName: string;

    ngOnInit(): void {
        this.donorService.getDetailsByUserName().subscribe((response:any)=>{
            this.firstName = response.user.firstName ? response.user.firstName : "";
            this.lastName = response.user.lastName ? response.user.lastName : "";
        });

    }

    navigateToHome() {
        this.userAuthService.clear();
        this.router.navigate(['/home']);
    }

}

