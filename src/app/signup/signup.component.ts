import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { AlertService } from '../_services/alert.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit{

    password = true;
    confirmPassword = true;
    responseMessage: any;
    isUserTypeSelected: boolean = false;

    constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService, private alertService: AlertService) {}

    ngOnInit(): void {
        // this.signUpForm = this.formBuilder.group({
        //     firstName:['', Validators.required],
        //     lastName:['', Validators.required],
        //     userName:['', Validators.required],
        //     email:['', Validators.required],
        //     password:['', Validators.required],
        //     confirmPassword:[''],
        //     userType:["", Validators.required],
        // },
        // { 
        //     validators: this.matchPassword('password', 'confirmPassword')
        // })

        // this.signUpForm.get('userType')?.valueChanges.subscribe((value: string) => {
        //     this.isUserTypeSelected = (value !== '');
        // });
    }

    // get formData() {
    //     return this.signUpForm.controls;
    // }

    public signup(signUpForm: NgForm): void {

        var formData = signUpForm.value;
        var data = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            userName: formData.userName,
            password: formData.password,
            email:formData.email,
            userType: formData.userType
        }

        
        this.userService.signup(data).subscribe((response:any)=>{
            this.router.navigate(['/login']);
            this.alertService.alertWithSuccess("User registered successfully!");
        },
        (error)=>{
            this.alertService.alertWithError("Something Went Wrong!");
        });
        
    }

    matchPassword(password: any, confirmPassword: any) {
        return (formGroup: FormGroup) => {
            const passwordControl = formGroup.controls[password];
            const confirmPasswordControl = formGroup.controls[confirmPassword];

            if(confirmPasswordControl.errors && confirmPasswordControl.errors['matchPassword']) {
                return;
            }

            if (passwordControl.value != confirmPasswordControl.value) {
                confirmPasswordControl.setErrors({matchPassword: true});
            } else {
                confirmPasswordControl.setErrors(null);
            }
        }
    }
        
}