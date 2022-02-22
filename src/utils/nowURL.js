import { isBrowser } from './isBrowser'

export const nowURL = props => {
  if (!isBrowser()) {
    return
  }

  let showPathName = true
  if (props?.pathname === false) {
    showPathName = false
  }
  const { protocol, host, pathname } = window.location
  let URL = protocol
  URL += host ? '//' + host : ''
  URL += pathname ? (showPathName ? pathname : '') : ''
  return URL
}
