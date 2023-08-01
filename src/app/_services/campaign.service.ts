import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserAuthService } from './user-auth.service';
import jwt_decode from 'jwt-decode';

@Injectable({
    providedIn: 'root'
})
export class CampaignService {

    url = environment.apiUrl;
    token = this.userAuthService.getToken() || '';
    decodedToken: any = jwt_decode(this.token);
    userName = this.decodedToken.sub;

    requestHeader = new HttpHeaders(
        { "Authorization": "Bearer " + this.token }
    );

    constructor(private httpClient: HttpClient, private userAuthService: UserAuthService) { }

    public addCampaign(data: any) {

        return this.httpClient.post(this.url + "/campaign/addCampaign/" + this.userName, data, { headers: this.requestHeader });

    }

    public getPendingCampaigns() {
        return this.httpClient.get(this.url + "/campaign/getPendingCampaigns/" + this.userName, { headers: this.requestHeader })
    }

    public getNotAppointedCampaigns() {
        return this.httpClient.get(this.url + "/campaign/getNotAppointedCampaigns/" + this.userName, {headers: this.requestHeader})
    }

    public getCampaignsByOrganizer() {
        return this.httpClient.get(this.url + "/campaign/getCampaignsByOrganizer/" + this.userName, {headers: this.requestHeader})
    }

    public approveRequest(campaignId: number) {
        return this.httpClient.post(this.url + "/campaign/approveCampaign", campaignId, {headers: this.requestHeader})
    }
}
