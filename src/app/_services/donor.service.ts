import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserAuthService } from './user-auth.service';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class DonorService {

    url = environment.apiUrl;
    token = this.userAuthService.getToken() || '';
    decodedToken: any = jwt_decode(this.token);
    userName = this.decodedToken.sub;

    requestHeader = new HttpHeaders(
        {"Authorization": "Bearer " + this.token}
    );

    constructor(private httpClient:HttpClient, private userAuthService: UserAuthService) { }
    
    public donorRegistration(data:any) {

        return this.httpClient.post(this.url + "/donor/addDonor/" + this.userName, data,  {headers: this.requestHeader});

    }

    public updateDonor(data: any) {
        return this.httpClient.post(this.url + "/donor/updateDonor/" + this.userName, data,  {headers: this.requestHeader});
    }

    public getDetailsByUserName() {
        return this.httpClient.get(this.url + "/donor/getDonorByUserName/" + this.userName, {headers: this.requestHeader});
    }
}
