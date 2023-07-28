import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  public setUserType(userType: string) {
    localStorage.setItem('userType', userType);
  }

  public getUserType(): string|null {
    return localStorage.getItem('userType');
  }

  public setToken(jwtToken: string) {
    localStorage.setItem('jwtToken', jwtToken);
  }

  public getToken(): string|null {
    return localStorage.getItem('jwtToken');
  }

  public clear() {
    localStorage.clear();
  }

  public isLoggedIn() {
    return this.getUserType() && this.getToken();
  }
}
