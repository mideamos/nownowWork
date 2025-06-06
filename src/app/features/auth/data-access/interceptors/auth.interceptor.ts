import {
  HttpEvent,
  HttpHandlerFn,
  HttpHeaders,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenService } from '@shared/data-access/services/token/token.service';
import { Observable, catchError, throwError } from 'rxjs';

export const AuthInterceptor = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const tokenService = inject(TokenService);
  if (
    tokenService.token 
  ) {
    const modifiedReq = req.clone({
      headers: new HttpHeaders().append(
        'Authorization',
        `Bearer ${tokenService?.token?.access_token}`
      ),
    });
    return next(modifiedReq).pipe(
      catchError((err) => {
        if (err?.status === 401) {
          tokenService.deleteTokenAndRedirect();
        }
        return throwError(() => err)
      })
    );
  }
  return next(req);
};
