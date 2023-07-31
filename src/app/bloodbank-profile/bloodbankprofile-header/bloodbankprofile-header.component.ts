import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/_services/user-auth.service';

@Component({
  selector: 'app-bloodbankprofile-header',
  templateUrl: './bloodbankprofile-header.component.html',
  styleUrls: ['./bloodbankprofile-header.component.css']
})
export class BloodbankprofileHeaderComponent {

    constructor(private userAuthService: UserAuthService, private router: Router) {}

    navigateToHome() {
        this.userAuthService.clear();
        this.router.navigate(['/home']);
    }

}
