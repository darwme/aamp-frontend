import { IUsuario } from '../usuario/usuario.model';
import { IRol } from '../rol/rol.model';
import { IEstudiante } from '../../../core/models/estudiante/estudiante.model';
import { IResponseBase } from '../../../core/models/base/response.model';


export interface IAuthCredentials {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  userId: string;
  username: string;
}

export type LoginRequest = Pick<IUsuario, 'email' | 'username' | 'password'>;
export type UpdatePasswordRequest = Pick<IUsuario, 'password'>;
export type RegisterRequest = Pick<IUsuario, 'email' | 'username' | 'password' | 'due_date' | 'baby_birth_date' | 'notes'>;
export type ForgotPasswordRequest = Pick<IUsuario, 'email'>;
export type VerifyEmailRequest = Pick<IAuthCredentials, 'accessToken'>;

export type LoginResponse = IResponseBase<IAuthCredentials>;
export type loginResponseError = Omit<IResponseBase<IAuthCredentials>, 'data'>;
export type RegisterResponse = Omit<IResponseBase<IUsuario>, 'data'>;
export type ForgotPasswordResponse = Omit<IResponseBase<IUsuario>, 'data'>;
export type VerifyEmailResponse = Omit<IResponseBase<IUsuario>, 'data'>;
