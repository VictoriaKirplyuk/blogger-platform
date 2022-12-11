export type ServerResponse<T> = T | ResponseErrorType;

export type ResponseErrorType = { errorsMessages: IErrorMessage[] } | string;

interface IErrorMessage {
  message: string;
  field: string;
}
