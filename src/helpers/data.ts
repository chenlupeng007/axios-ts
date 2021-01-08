import { isPlainObject } from './utils'

export const transformRequest = (data: any): any => isPlainObject(data) ? JSON.stringify(data) : data;