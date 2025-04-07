import { IResponseBase } from '../base/response.model';

export interface ISupervisor {
  id_usuario: number;
  correo: string;
  nombre: string;
  id_rol: number;
}

export type SupervisoresGetResponse = IResponseBase<ISupervisor[]>;
export type SupervisorGetResponse = IResponseBase<ISupervisor>;

export type SupervisorCreateResponse = IResponseBase<ISupervisor>;
export type SupervisorUpdateResponse = IResponseBase<ISupervisor>;

export type SupervisorGetRequest = Pick<ISupervisor, 'id_usuario'>;
export type SupervisorDeleteRequest = Pick<ISupervisor, 'id_usuario'>;

export type SupervisorCreateRequest = Omit<ISupervisor, 'id_usuario' | 'id_rol'>;
export type SupervisorUpdateRequest = Pick<ISupervisor, 'id_usuario'>;
