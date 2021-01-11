import { AxiosRequestConfig } from "./types";
import { buildURL } from "./helpers/url";
import { transformRequest } from "./helpers/data";
import { processHeaders } from "./helpers/header";
import { xhr } from "./xhr";

function axios(config: AxiosRequestConfig) {
  return xhr({
    ...config,
    url: buildURL(config.url, config.params),
    data: transformRequest(config.data),
    headers: processHeaders(config.headers, config.data)
  });
}

export default axios;
