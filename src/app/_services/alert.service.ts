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

  public alertWithError(message: string) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: message,
      })
      

  }
}
