import {
  loadAllCustomersCache,
  insertAllCustomersCache,
  handleCustomersCache,
  checkCacheExists,
} from '../../service/cache'
import { makeCache } from '../api/cache'

const key = 'customers'
export const makeLoadAllCustomersCache = () => {
  return loadAllCustomersCache(key, makeCache())
}

export const makeInsertAllCustomersCache = () => {
  return insertAllCustomersCache(key, makeCache())
}

export const makeHandleCustomersCache = () => {
  return handleCustomersCache(key, makeCache())
}

export const makeCheckCacheExists = () => {
  return checkCacheExists(key, makeCache())
}
