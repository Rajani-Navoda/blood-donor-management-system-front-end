import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Donor } from './donor';

@Injectable({
  providedIn: 'root'
})
export class DonorService {

  private BaseURL = "http://localhost:9090/getAllDonors";
  constructor(private httpClient: HttpClient) { }

  getDonorsList(): Observable<Donor[]>{

    return this.httpClient.get<Donor[]>('${this.BaseURL}');
  }
}
