import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-donor-registration2',
  templateUrl: './donor-registration2.component.html',
  styleUrls: ['./donor-registration2.component.css']
})
export class DonorRegistration2Component {

onSubmit(form: NgForm)
{
  console.log(form);
}
}
