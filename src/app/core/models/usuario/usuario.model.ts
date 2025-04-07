import { IResponseBase } from "../base/response.model";
import { IEstudiante } from "../estudiante/estudiante.model";

export interface Usuario {
  id_usuario: number;
  correo: string;
  edad: number;
  sexo: string;
}

//creado para el perfil de usuario
export interface UsuarioPerfil {
  id_usuario:number,
  correo:string,
  id_rol:number,
  nombre:string,
  verificado:string,
  estudiante: IEstudiante,
  estado_info: boolean
}

export type UsuarioGetResponse = IResponseBase<UsuarioPerfil>;

export interface EstudianteRequest {
  id_usuario: number,
  ubigeo: string,
  sexo: string,
  fecha_nacimiento: string,
}

export interface EstudianteInfo {
  correo:string,
  edad: number;
  fecha_nacimiento: string;
  estado_info: boolean,
  departamento: string;
  distrito: string;
  provincia: string;
  universidad: string;
  siglas: string;
}

export type EstadoInfoResponse = IResponseBase<boolean>;

