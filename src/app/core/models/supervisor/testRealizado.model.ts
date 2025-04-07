import { IResponseBase } from "../base/response.model";
import { Resultado,Resultado2 } from "./resultado";

export interface TestRealizado {
    n_orden: number;
    array_respuestas: string;
    fecha: Date;
    id_test_realizado: number;
    id_usuario: number;
    resultados: Resultado[];
}

export interface TestRealizado2 {
    n_orden: number;
    array_respuestas: string;
    fecha: Date;
    id_test_realizado: number;
    id_usuario: number;
    resultados: Resultado2[];
}

export type TestsRealizadoResponse = IResponseBase<TestRealizado[]>;
export type TestRealizado2Response = IResponseBase<TestRealizado2>;

