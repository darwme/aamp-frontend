import { IRol } from "../rol/rol.model"
import { IEstudiante } from "../../../core/models/estudiante/estudiante.model"

export interface IUsuario {
    id_usuario: number;
    email: string;
    username: string;
    password: string;
    verificado: boolean;
    due_date: string;
    baby_birth_date: string;
    notes: string;
    rol: string[];
    estado_info: boolean;
}

export type LoginModel = Pick<IUsuario, 'email' | 'username' | 'password'>;
export type RolModel = Pick<IUsuario, 'rol'>;
export type UserRolModel = Pick<IUsuario, 'rol'>;