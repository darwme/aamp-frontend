export interface IResponseBase<T> {
  message: string;
  status: number;
  data?: T;
}
