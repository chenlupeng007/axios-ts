export type Method =
  | "get"
  | "GET"
  | "delete"
  | "Delete"
  | "head"
  | "HEAD"
  | "options"
  | "OPTIONS"
  | "post"
  | "POST"
  | "put"
  | "PUT"
  | "patch"
  | "PATCH";

export type AxiosRequestConfig = {
  url: string;
  method?: Method;
  data?: any;
  params?: Params;
  headers?: any;
  responseType?: XMLHttpRequestResponseType;
  timeout?: number;
};

export interface AxiosResponse {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: AxiosRequestConfig;
  request: any;
}
export interface AxiosPromise extends Promise<AxiosResponse> {}

export type Params = Record<string, any>;
