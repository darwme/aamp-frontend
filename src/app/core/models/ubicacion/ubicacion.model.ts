import { IResponseBase } from "../base/response.model";

export interface IUbicacion {
    departamento: string;
    distrito: string;
    provincia: string;
    ubigeo: string;
}

export type UbicacionesGetResponse = IResponseBase<IUbicacion[]>;
export type UbicacionGetResponse = IResponseBase<IUbicacion>;
export type UbicacionesGetRequest = Pick<IUbicacion, 'ubigeo'>;

export interface Departamento {
    nombre: string;
    provincias: Provincia[];
}
export interface Provincia {
    nombre: string;
    distritos: Distrito[];
  }
  
export interface Distrito {
    nombre: string;
    ubigeo: string;
}
