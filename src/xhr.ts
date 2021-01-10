import { AxiosPromise, AxiosRequestConfig, AxiosResponse } from "./types";
import { parseHeaders } from "./helpers/header";

export const xhr = (config: AxiosRequestConfig): AxiosPromise =>
  new Promise((resolve, reject) => {
    const { url, method = "get", data = null, headers, responseType } = config;
    const request = new XMLHttpRequest();
    request.responseType = responseType ?? request.responseType;
    request.timeout = config.timeout ?? request.timeout;

    request.onreadystatechange = function handleLoad() {
      if (request.readyState !== 4) {
        return;
      }

      const responseHeaders = parseHeaders(request.getAllResponseHeaders());
      const responseData =
        responseType && responseType !== "text"
          ? request.response
          : request.responseText;
      const response: AxiosResponse = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };
      handleResponse(response);
    };

    request.onerror = function handleError() {
      reject(new Error("Network Error"));
    };

    request.ontimeout = function handleTimeout() {
      reject(new Error(`Timeout of ${config.timeout} ms exceeded`));
    };

    request.open(method.toUpperCase(), url);
    if (data == null && headers["Content-Type"]) delete headers["Content-Type"];
    for (const headerName of Object.keys(headers)) {
      request.setRequestHeader(headerName, headers[headerName]);
    }
    request.send(data);

    function handleResponse(response: AxiosResponse) {
      if (response.status >= 200 && response.status < 300) {
        resolve(response);
      } else {
        reject(new Error(`Request failed with status code ${response.status}`));
      }
    }
  });
