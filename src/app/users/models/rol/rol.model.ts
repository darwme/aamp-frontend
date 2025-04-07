import { IPermiso } from '../permiso/permiso.model';
import { IResponseBase } from '../../../core/models/base/response.model';
export interface IRol {
    id_rol: number;
    nombre: string;
    descripcion: string;
    permisos: IPermiso[];
}

export type RolesGetResponse = IResponseBase<IRol[]>
export type RolGetResponse = IResponseBase<IRol>;

export type RolCreateResponse = Omit<IResponseBase<IRol>, 'data'>;
export type RolUpdateResponse = Omit<IResponseBase<IRol>, 'data'>;

export type RolGetRequest = Pick<IRol, 'id_rol'>;
export type RolDeleteRequest = Pick<IRol, 'id_rol'>;

export type RolCreateRequest = Pick<
  IRol,
  | 'nombre'
  | 'descripcion'
>;