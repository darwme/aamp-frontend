import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environments';
import { EstadoInfoResponse, UsuarioGetResponse } from '../../models/usuario/usuario.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {
  private apiUrl: string;
  nombre: string;
  version: string;
  constructor(private http: HttpClient) { 
    this.apiUrl = environment.apiUrl;
        this.nombre = 'usuario_service';
        this.version = 'v1';
  }

  getUsuario(id_usuario:number): Observable<UsuarioGetResponse> {
      return this.http.get<UsuarioGetResponse>(
        `${this.apiUrl}/${this.nombre}/${this.version}/usuario/perfil/${id_usuario}`
      );
  }
  getEstadoInfo(id_usuario: number): Observable<EstadoInfoResponse> {
    return this.http.get<EstadoInfoResponse>(
      `${this.apiUrl}/${this.nombre}/${this.version}/usuario/estado_info/${id_usuario}`
    );
  }
}
