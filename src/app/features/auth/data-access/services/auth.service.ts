import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import {
  TokenResInterface,
  TokenService,
} from "@app/shared/data-access/services/token/token.service";
import * as AuthTypes from "../models/auth.types";
import { environment } from "@environments/environment.development";
import {
  GenericResInterface,
} from "@app/shared/data-access/models/generic-response.models";
import { tap } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly tokenService = inject(TokenService);

  login(payload: AuthTypes.LoginInterface) {
    return this.http
      .post<GenericResInterface<TokenResInterface>>(
        `${environment.apiUrl}/auth/login`,
        payload,
      )
      .pipe(
        tap((res) => {
          this.tokenService.saveTokenToLS(res.data);
        }),
      );
  }

  verifyOtp(payload: AuthTypes.OtpInterface) {
    return this.http
      .post<GenericResInterface<TokenResInterface>>(
        `${environment.apiUrl}/auth/verify-otp`,
        payload,
      )
      .pipe(
        tap((res) => {
          this.tokenService.saveTokenToLS(res.data);
        }),
      );
  }

  resendOtp(type: AuthTypes.OtpEnum, payload: AuthTypes.ResendOtpInterface) {
    return this.http.post<GenericResInterface<null>>(
      `${environment.apiUrl}/auth/resend-otp/${type}`,
      payload,
    );
  }

  registerCompany(payload: AuthTypes.RegisterInterface) {
    return this.http.post<GenericResInterface<null>>(
      `${environment.apiUrl}/account`,
      payload,
    );
  }


  logOut() {
    return this.http
      .get<GenericResInterface<null>>(`${environment.apiUrl}/auth/logout`)
      .pipe(
        tap((res) => {
          this.tokenService.deleteTokenAndRedirect();
        }),
      );
  }
}
