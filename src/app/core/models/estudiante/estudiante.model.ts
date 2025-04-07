import { IUbicacion } from "../ubicacion/ubicacion.model";
import { IUniversidad } from "../universidad/universidad.model";
import { IResponseBase } from '../base/response.model';
import { Usuario } from "../usuario/usuario.model";

export interface IEstudiante {
index: any;
    id_estudiante: number;
    edad: number;
    fecha_nacimiento: string;
    sexo: string;
    ubicacion: IUbicacion;
    universidad: IUniversidad;
    usuario: Usuario; 
}

export type EstudiantesGetResponse = IResponseBase<IEstudiante[]>
export type EstudianteGetResponse = IResponseBase<IEstudiante>;

export type EstudianteCreateResponse = IResponseBase<IEstudiante>;
export type EstudianteUpdateResponse = IResponseBase<IEstudiante>;

export type EstudianteGetRequest = Pick<IEstudiante, 'id_estudiante'>;
export type EstudianteDeleteRequest = Pick<IEstudiante, 'id_estudiante'>;

export type EstudianteCreateRequest = Omit<IEstudiante, 'id_estudiante'>;
export type EstudianteUpdateRequest = Pick<IEstudiante, 'id_estudiante'>;