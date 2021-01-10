import { isPlainObject } from "./utils";

const normalizeHeaderName = (headers: any, headerName: string) => {
  let normalizedHeaders = {};
  if (!headers) return normalizedHeaders;
  for (const header of Object.keys(headers)) {
    if (header.toUpperCase() === headerName.toUpperCase()) {
      normalizedHeaders = {
        ...normalizedHeaders,
        [headerName]: headers[header]
      };
    }
  }
  return normalizedHeaders;
};
export const processHeaders = (headers: any, data: any) => {
  headers = normalizeHeaderName(headers, "Content-Type");
  if (isPlainObject(data)) {
    if (headers && !headers["Content-Type"]) {
      headers["Content-Type"] = "application/json;charset=utf-8";
    }
  }
  return headers;
};

export function parseHeaders(headers: string): any {
  let parsed: Record<string, any> = {};
  if (!headers) {
    return parsed;
  }

  headers.split("\r\n").forEach(line => {
    let [key, val] = line.split(":");
    key = key.trim().toLowerCase();
    if (!key) {
      return;
    }
    if (val) {
      val = val.trim();
    }
    parsed[key] = val;
  });

  return parsed;
}
