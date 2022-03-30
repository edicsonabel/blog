import { isBrowser } from './isBrowser'

export const nowURL = props => {
  if (!isBrowser()) {
    return
  }

  let showPathName = true
  let showHost = true
  if (props?.pathname === false) {
    showPathName = false
  }
  if (props?.host === false) {
    showHost = false
  }
  const { protocol, host, pathname } = window.location
  let URL = showHost ? protocol : ''
  URL += host && showHost ? '//' + host : ''
  URL += pathname ? (showPathName ? pathname : '') : ''
  return URL
}
