import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { UserAuthService } from '../_services/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private userAuthService: UserAuthService, private router: Router) {}
    
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
                        this.router.navigate(['/organizer-profile-home']);
                    } else {
                        this.router.navigate(['/organizer-profile-home']);
                    }
                }
            },

            (error)=>{
                console.log(error);
            }
        );
    }

}
