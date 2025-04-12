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
    // Nuevos campos para mothers_profiles
    weight?: number;
    height?: number;
    blood_type?: string;
    allergies?: string;
    medical_history?: string;
    fecha_nacimiento?: string;
    semanas_gestacion?: number;
    numero_de_hijos?: number;
    tipo_embarazo?: string;
    plan_parto?: string;
    fecha_ultimo_control?: string;
    mother_concept?: string;
    rol: string[];
    estado_info: boolean;
}

export type LoginModel = Pick<IUsuario, 'email' | 'username' | 'password'>;
export type RolModel = Pick<IUsuario, 'rol'>;
export type UserRolModel = Pick<IUsuario, 'rol'>;