import { IResponseBase } from "../../base/response.model";

export interface Pregunta {
    id_pregunta: number;
    descripcion: string;
}

export type PreguntasResponse = IResponseBase<Pregunta[]>;