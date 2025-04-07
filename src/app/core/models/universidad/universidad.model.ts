import { IResponseBase } from '../base/response.model';

export interface IUniversidad {
  id_universidad: number;
  nombre: string;
  siglas: string;
  dominio: string;
}

export type UniversidadesGetResponse = IResponseBase<IUniversidad[]>
export type UniversidadGetResponse = IResponseBase<IUniversidad>;
export type UniversidadCreateResponse = IResponseBase<IUniversidad>;
export type UniversidadUpdateResponse = IResponseBase<IUniversidad>;
export type UniversidadGetRequest = Pick<IUniversidad, 'id_universidad'>;
export type UniversidadDeleteRequest = Pick<IUniversidad, 'id_universidad'>;

export type UniversidadCreateRequest = Pick<
  IUniversidad,
  | 'nombre'
  | 'siglas'
  | 'dominio'
>;

export type UniversidadUpdateRequest = Pick<
  IUniversidad,
  | 'nombre'
  | 'siglas'
  | 'dominio'
>;

export type UniversidadSearchRequest = Pick<
  IUniversidad,
  | 'nombre'
>;


