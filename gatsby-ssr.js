import React from 'react'

const getMode = () => {
  let colorMode = 'light'
  const prefersDarkFromMQ = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches
  const persistedPreference = window.localStorage.getItem('DarkMode')
  const hasUsedToggle = typeof persistedPreference === 'string'

  if (hasUsedToggle) {
    colorMode = persistedPreference === 'true'
  } else {
    colorMode = prefersDarkFromMQ
  }

  colorMode = colorMode ? 'dark' : 'light'
  const root = document.documentElement
  root.style.setProperty('--dark-mode', colorMode)
}

const MagicScriptTag = () => {
  const boundFn = String(getMode)
  const calledFunction = `(${boundFn})()`

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />
}

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<MagicScriptTag key={1} />)
}

// States
export { default as wrapRootElement } from 'states/'
