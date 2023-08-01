import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserAuthService } from './user-auth.service';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

    url = environment.apiUrl;
    token = this.userAuthService.getToken() || '';
    decodedToken: any = jwt_decode(this.token);
    userName = this.decodedToken.sub;

    requestHeader = new HttpHeaders(
        { "Authorization": "Bearer " + this.token }
    );

    constructor(private httpClient: HttpClient, private userAuthService: UserAuthService) { }

    public createAppointment(data: any) {

        return this.httpClient.post(this.url + "/appointment/createAppointment/" + this.userName, data, { headers: this.requestHeader });

    }
}
