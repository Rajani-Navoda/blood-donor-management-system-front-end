import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    
    url = environment.apiUrl;
    requestHeader = new HttpHeaders(
        {"No-Auth": "True"}
    );

    constructor(private httpClient:HttpClient, private userAuthService: UserAuthService) { }

    public signup(data:any) {
        return this.httpClient.post(this.url + "/user/signup", data, {headers: this.requestHeader});
    }

    public login(data: any) {
        return this.httpClient.post(this.url + "/authenticate", data, {headers: this.requestHeader});
    }

    public userTypeMatch(allowedUserTypes: Array<String>): boolean {
        let isMatch = false;
        const userType: any = this.userAuthService.getUserType();
    
        if (userType != null && userType) {
            for (let i = 0; i < allowedUserTypes.length; i++) {
                if (userType === allowedUserTypes[i]) {
                    isMatch = true;
                    return isMatch;
                }
            }
        }
        return false;
    }
}
