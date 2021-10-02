import { LocalStorageAdapter } from '../../infra/cache'

export const makeCache = () => {
  return LocalStorageAdapter
}
