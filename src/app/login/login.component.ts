import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { UserAuthService } from '../_services/user-auth.service';
import { Router } from '@angular/router';
import { AlertService } from '../_services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private userAuthService: UserAuthService, private alertService: AlertService, private router: Router) {}
    
    ngOnInit(): void {
    }

    login(loginForm: NgForm) {
        this.userService.login(loginForm.value).subscribe(
            (response: any)=>{
                this.userAuthService.setUserType(response.user.userType);
                this.userAuthService.setToken(response.jwtToken);

                const userType = response.user.userType;
                const isFirstLogin = response.user.isFirstLogin;

                if (userType === 'donor') {
                    if (isFirstLogin === true) {
                        this.router.navigate(['/donor-registration']);
                    } else {
                        this.router.navigate(['/donor-profile-home']);
                    }
                } else if (userType === 'organizer') {
                    if (isFirstLogin === true) {
                        this.router.navigate(['/organizer-registration']);
                    } else {
                        this.router.navigate(['/organizer-profile-home']);
                    }
                } else if (userType === 'admin') {
                    this.router.navigate(['/admin-home']);
                } else if (userType === 'blood-bank') {
                    this.router.navigate(['/bloodbank-home']);
                }
            },

            (error)=>{
                this.alertService.alertWithError("Incorrect Username and Password");
            }
        );
    }

}
