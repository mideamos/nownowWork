import { inject, Injectable } from "@angular/core";
import { Router } from "@angular/router";

export interface TokenResInterface{
    access_token: string;
    refresh_token: string;
}

@Injectable({
  providedIn: "root",
})
export class TokenService {
  private readonly router = inject(Router)
  private tokenKey = "bee-ac";

  private encryptToken(token: TokenResInterface) {
    const encryptedToken = {
      ...token,
      access_token: `eyjh.${token.access_token}`,
      refresh_token: `eyjh.${token.refresh_token}`,
    };

    return encryptedToken;
  }

  private decryptToken() {
    const token = localStorage.getItem(this.tokenKey);
    if (token) {
      const parsedToken = JSON.parse(token) as TokenResInterface;
      const decryptedToken = {
      access_token: parsedToken.access_token.split("eyjh.")[1],
      refresh_token: parsedToken.refresh_token.split("eyjh.")[1],
    };
      return decryptedToken as TokenResInterface;
    }
    return null;
  }

  saveTokenToLS(token: TokenResInterface) {
    const encryptedToken = this.encryptToken(token);
    localStorage.setItem(this.tokenKey, JSON.stringify(encryptedToken));
  }

  get token() {
    return this.decryptToken();
  }

  get isAuthenticated(){
    return !!this.token;
  }

  deleteTokenAndRedirect() {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/auth/login']);
  }
}