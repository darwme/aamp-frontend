import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

import { GetMenuRequest } from '../models/menu-item.model';
import { GetMenuResponse } from '../models/menu-item.model';
import { GetMenusResponse } from '../models/menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private nombre: string;
  private version: string;

  constructor(private httpClient: HttpClient, private router: Router) {
    this.nombre = 'menu_service';
    this.version = 'v1';
   }

  getMenu(id_rol: number): Observable<GetMenuResponse> {
    const val =  this.httpClient.get<GetMenuResponse>(`${environment.apiUrl}/${this.nombre}/${this.version}/listar/${id_rol}`)
    .pipe(
      catchError((error: any) => {
        console.error(error);
        return throwError(error);
      })
      
    );
    return val;
  }

  getMenus(): Observable<GetMenusResponse> {
    const val =  this.httpClient.get<GetMenusResponse>(`${environment.apiUrl}/${this.nombre}/${this.version}/get/menus`)
    .pipe(
      catchError((error: any) => {
        console.error(error);
        return throwError(error);
      })
      
    );
    return val;
  }
}
