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
    data?: any,
    params?: Params,
    headers?: any;
};

export type Params = Record<string, any>