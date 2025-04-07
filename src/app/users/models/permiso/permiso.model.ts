import { IResponseBase } from "../../../core/models/base/response.model";

export interface IPermiso {
    id_permiso: number;
    nombre: string;
}


export type PermisosGetResponse = IResponseBase<IPermiso[]>
export type PermisoGetResponse = IResponseBase<IPermiso>;

export type PermisoCreateResponse = Omit<IResponseBase<IPermiso>, 'data'>;
export type PermisoUpdateResponse = Omit<IResponseBase<IPermiso>, 'data'>;

export type PermisoGetRequest = Pick<IPermiso, 'id_permiso'>;
export type PermisoDeleteRequest = Pick<IPermiso, 'id_permiso'>;

export type PermisoCreateRequest = Pick<
  IPermiso,
  | 'nombre'
>;