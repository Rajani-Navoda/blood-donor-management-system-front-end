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

    public alertWithButtons() {
        Swal.fire({
            title: 'Do you want to approve the request?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: '',
            denyButtonText: `Don't save`,
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire('Saved!', '', 'success')
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          })
    }
}
