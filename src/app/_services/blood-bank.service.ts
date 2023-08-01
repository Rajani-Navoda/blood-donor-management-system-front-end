import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BloodBankService {

    url = environment.apiUrl;
    token = this.userAuthService.getToken();

    requestHeader = new HttpHeaders(
        {"Authorization": "Bearer " + this.token}
    );

    constructor(private httpClient:HttpClient, private userAuthService: UserAuthService) { }

    public createBloodBank(data:any) {

        return this.httpClient.post(this.url + "/blood-bank/createBloodBank", data,  {headers: this.requestHeader});

    }

    public getAllBloodBanks() {
        return this.httpClient.get(this.url + "/blood-bank/getAllBloodBanks", { headers: this.requestHeader });
    }
    
}
