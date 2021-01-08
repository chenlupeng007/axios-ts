import { AxiosRequestConfig } from "./types";

export const xhr = (config: AxiosRequestConfig) => {
    const { url, method = "get", data = null, headers } = config;
    const request = new XMLHttpRequest();
    request.open(method.toUpperCase(), url);
    if (data == null && headers["Content-Type"]) delete headers["Content-Type"];
    for (const headerName of Object.keys(headers)) {
        request.setRequestHeader(headerName, headers[headerName])
    }
    request.send(data);
};
