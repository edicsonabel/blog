import React from 'react'

const getMode = () => {
  const mainColors = {
    primary: '#4ECDC4',
    secondary: '#EEF36A',
    light: '#F5F3F5',
    dark: '#242325',
    blue_dark: '#001021',
    gray_dark: '#3C4043',
    black: '#000a14'
  }

  const arrColors = Object.keys(mainColors)

  const toColors = {}

  for (let i = 0; i < arrColors.length; i++) {
    for (let j = 0; j < arrColors.length; j++) {
      if (i !== j) {
        const key = `${arrColors[i]}_to_${arrColors[j]}`
        const value = { light: mainColors[arrColors[i]], dark: mainColors[arrColors[j]] }
        toColors[key] = value
      }
    }
  }

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

  const arrToColors = Object.keys(toColors)

  for (let i = 0; i < Object.keys(toColors).length; i++) {
    const key = arrToColors[i]
    const name = `--${key.replaceAll('_', '-')}`
    root.style.setProperty(name, toColors[key][colorMode])
  }
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
