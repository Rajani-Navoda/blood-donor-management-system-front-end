import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';
import { environment } from 'src/environments/environment';
import jwt_decode from 'jwt-decode';

@Injectable({
    providedIn: 'root'
})
export class OrganizerService {

    url = environment.apiUrl;
    token = this.userAuthService.getToken() || '';
    decodedToken: any = jwt_decode(this.token);
    userName = this.decodedToken.sub;

    requestHeader = new HttpHeaders(
        { "Authorization": "Bearer " + this.token }
    );

    constructor(private httpClient: HttpClient, private userAuthService: UserAuthService) { }

    public organizerRegistration(data:any) {

        return this.httpClient.post(this.url + "/organizer/addOrganizer/" + this.userName, data,  {headers: this.requestHeader});

    }
}
