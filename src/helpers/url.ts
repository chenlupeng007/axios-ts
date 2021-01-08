import { Params } from "../types";
import { isDate, isPlainObject } from './utils'

const encode = (val: string): string =>
    encodeURIComponent(val)
        .replace(/%40/g, "@")
        .replace(/%3A/gi, ":")
        .replace(/%24/g, "$")
        .replace(/%2C/gi, ",")
        .replace(/%20/g, "+")
        .replace(/%5B/gi, "[")
        .replace(/%5D/gi, "]");

export const buildURL = (url: string, params?: Params) => {
    if (!params) return url;
    const parts: string[] = [];
    for (let key of Object.keys(params)) {
        const values = [params[key]].flat();
        for (let value of values) {
            if (!value) continue;
            if (Array.isArray(params[key])) key = key + "[]";
            value = isDate(value)
                ? value.toISOString()
                : isPlainObject(value)
                ? JSON.stringify(value)
                : value;

            parts.push(`${encode(key)}=${encode(value)}`);
        }
    }
    const serializedParams = parts.join("&");
    if (serializedParams) {
        const markIndex = url.indexOf("#");
        if (markIndex !== -1) {
            url = url.slice(0, markIndex);
        }
        url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }

    return url;
};
