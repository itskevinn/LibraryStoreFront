
interface IResponse<T> {
  success: boolean
  data: T;
  message: string;
  statusCode: number;
  exceptionMessage: string;
}

export class Response<T = unknown> implements IResponse<T> {
  success: boolean = false;
  data: T;
  message: string = '';
  statusCode: number = 0;
  exceptionMessage: string = '';
}
