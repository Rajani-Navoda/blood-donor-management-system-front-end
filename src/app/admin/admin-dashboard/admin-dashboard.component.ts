import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/_services/user-auth.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {

    constructor(private userAuthService: UserAuthService, private router: Router) {}

    navigateToHome() {
        this.userAuthService.clear();
        this.router.navigate(['/home']);
    }

}
