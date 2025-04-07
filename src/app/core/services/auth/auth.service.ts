import { Injectable, OnDestroy } from '@angular/core';
import {environment} from '../../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, Subscription, throwError } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import jwt_decode from 'jwt-decode';

import {
  ForgotPasswordRequest,
  ForgotPasswordResponse,
  LoginRequest,
  loginResponseError,
  VerifyEmailRequest,
  VerifyEmailResponse,
} from '../../../users/models/auth/credentials.model';
import { LoginResponse } from '../../../users/models/auth/credentials.model';
import { RegisterRequest } from '../../../users/models/auth/credentials.model';
import { RegisterResponse } from '../../../users/models/auth/credentials.model';
import { IExceptionResponse } from '../../models/base/exceptionResponse.model';
import { Router } from '@angular/router';
import { IUsuario, UserRolModel } from '../../../users/models/usuario/usuario.model';
import { UpdatePasswordRequest } from '../../../users/models/auth/update-password.model';
import { VerificadoRequest } from '../../../users/models/auth/verificacion.model';
import { IResponseBase } from '../../models/base/response.model';
import { EstudianteRequest } from '../../models/usuario/usuario.model';
import { IToken } from '../../../users/models/auth/token.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private authToken = `${environment.application.token}`;
  private apiUrl: string;
  private nombre: string;

  constructor(private http: HttpClient, private router: Router) {
    this.apiUrl = environment.apiUrl;
    this.nombre = 'auth';
  }

  getAuthFromLocalStorage(): string | undefined {
    try{
      const auth = localStorage.getItem(this.authToken);
      if (!auth) {
        return undefined;
      }

      //const authData = JSON.parse(auth);
      return auth;
    }catch(e){
      console.error('Error getting auth from local storage', e);
      return undefined;
    }
  }

  login(user: LoginRequest): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(
        `${this.apiUrl}/${this.nombre}/login`,
        user
      )
      .pipe(
        catchError((error: loginResponseError) => {
          return throwError(error);
        })
      );
  }

  getUserRol(userId: string): Observable<UserRolModel> {
    return this.http.get<IUsuario>(
      `${this.apiUrl}/roles/${userId}`
    );
  }

  register(user: RegisterRequest): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(
      `${this.apiUrl}/mothers`,
      user
    );
  }

  forgotPassword(correo: string): Observable<ForgotPasswordResponse> {
    return this.http
      .post<ForgotPasswordResponse>(
        `${this.apiUrl}/${this.nombre}/forgot_password`,
        correo
      )
      .pipe(
        catchError((error: any) => {
          return throwError(error.error);
        })
      );
  }

  updatePasswordToken(request: UpdatePasswordRequest): Observable<any> {
    return this.http
      .put<any>(
        `${this.apiUrl}/usuario_service/${this.nombre}/usuario/recuperar/contrasena`,
        request
      )
      .pipe(
        catchError((error: any) => {
          return throwError(error.error);
        })
      );
  }

  verifyEmail(
    verifyEmailRequest: VerifyEmailRequest
  ): Observable<VerifyEmailResponse> {
    return this.http
      .get<VerifyEmailResponse>(
        `${this.apiUrl}/${this.nombre}/verify/${verifyEmailRequest.accessToken}`
      )
      .pipe(
        catchError((error: any) => {
          return throwError(error.error);
        })
      );
  }

  logout() {
    localStorage.removeItem(this.authToken);
    this.router.navigate(['/login']);
  }

  getToken(): string {
    return localStorage.getItem(this.authToken) || '';
  }

  getUserId(): number {
    const decoded: any = this.decryptToken();
    return decoded.sub.id_usuario;
  }

  get UserRole(): string {
    const decodedToken: any = this.decryptToken();
    return decodedToken.sub.rol.nombre_rol;
  }

  checkToken(): boolean {
    const token = localStorage.getItem(this.authToken);
    if (!token) {
      return false;
    }
    return true;
  }

  decryptToken<T>(): T | null {
    try {
      const token = this.getToken();
      if(!token){
        return null;
      }

      return jwtDecode<T>(token);
    } catch (error:any) {
      throw new Error('Invalid token:', error);
    }
  }

  getDecryptToken<T>(): T | null {
    return this.decryptToken();
  }

  getRoleFromToken(): number {
    const token = this.getToken();
    if (token) {
      const decodedToken: any = jwtDecode(token);
      return decodedToken.sub?.rol?.id_rol;
    }
    return 0;
  }

  actualizarDatosEstudiante(
    data: EstudianteRequest
  ): Observable<IResponseBase<null>> {
    return this.http.put<IResponseBase<null>>(
      `${this.apiUrl}/${this.nombre}/update/user/estudiante`,
      data
    );
  }
}
