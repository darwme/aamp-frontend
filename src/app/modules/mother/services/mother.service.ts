import { HttpClient } from '@angular/common/http';
import {environment} from '../../../../environments/environments';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MotherService {
  private authToken = `${environment.application.token}`;
  private apiUrl: string;
  private nombre: string;

  constructor(private http: HttpClient, private router: Router) {
      this.apiUrl = environment.apiUrl;
      this.nombre = 'mothers';
    }


  getMotherInfo(userId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${this.nombre}/${userId}`);
  }

  updateMother(mother: any, userId: any): Observable<any> {
    console.log('update payload', mother);
    return this.http.put<any>(`${this.apiUrl}/${this.nombre}/${userId}`, mother);
  }

  deleteMother(userId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${this.nombre}/${userId}`);
  }
}
