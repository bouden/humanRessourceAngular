import { Injectable } from '@angular/core';
const username = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  private roles: Array<string> = [];
  constructor() { }

  signOut() {
    window.sessionStorage.clear();
  }
  // tslint:disable-next-line:no-shadowed-variable
  // tslint:disable-next-line:no-shadowed-variable
  public saveUsername(nameuser: string) {
    window.sessionStorage.removeItem(username);
    window.sessionStorage.setItem(username, nameuser);
  }
  public getUsername(): string {
    return sessionStorage.getItem(username);
  }

  public saveAuthorities(authorities: string[]) {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public getAuthorities(): string[] {
    this.roles = [];
    JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach(authority => {
        this.roles.push(authority.authority);
      });
    return this.roles;
  }}
