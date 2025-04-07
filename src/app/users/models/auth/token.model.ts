import { IUsuario } from "../usuario/usuario.model";

export interface IToken {
    fresh: boolean;
    iat: number;
    jti: string;
    type: string;
    sub: IUsuario;
    nbf: number;
    csrf: string;
    exp: number;
}