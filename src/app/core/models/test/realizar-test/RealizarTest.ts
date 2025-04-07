import { IResponseBase } from "../../base/response.model";

export interface RealizarTestRequest {
    id_usuario: number;
    array_respuestas: number[];
}

export type RealizarTestResponse = IResponseBase<Data>;

export interface Data {
    id_test_realizado: number;
    n_orden: number;
}