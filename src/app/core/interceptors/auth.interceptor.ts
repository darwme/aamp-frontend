import { HttpInterceptorFn, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { Injectable, Injector, inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  let authService = inject(AuthService);

  let auth = authService.getAuthFromLocalStorage();

  if (auth) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${auth}`
      }
    });
  }

  return next(req).pipe(
    catchError((error) => {
      if (error.status === 401) {
        authService.logout();
      }
      return throwError(error);
    })
  );
};
