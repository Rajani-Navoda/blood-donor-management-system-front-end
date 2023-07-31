import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/_services/user-auth.service';

@Component({
  selector: 'app-organizerprofile-header',
  templateUrl: './organizerprofile-header.component.html',
  styleUrls: ['./organizerprofile-header.component.css']
})
export class OrganizerprofileHeaderComponent {

    constructor(private userAuthService: UserAuthService, private router: Router) {}

    navigateToHome() {
        this.userAuthService.clear();
        this.router.navigate(['/home']);
    }

}
