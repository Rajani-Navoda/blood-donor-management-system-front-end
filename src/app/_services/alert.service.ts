import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  public alertWithSuccess(message: string) {
    Swal.fire("Success", message, "success");
  }

  public alertWithError() {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        // footer: '<a href="">Why do I have this issue?</a>'
      })
      

  }
}
