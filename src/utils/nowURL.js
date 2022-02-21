import { isBrowser } from './isBrowser'

export const nowURL = () => {
  if (!isBrowser()) {
    return
  }
  const { protocol, host, pathname } = window.location
  let URL = protocol
  URL += host ? '//' + host : ''
  URL += pathname ? pathname : ''
  return URL
}
