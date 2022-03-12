import React, { createContext, useState, useEffect } from 'react'

/*    COMPONENTS & UTILS    */
import { isBrowser, toColors } from 'utils'

export const DataContext = createContext()

const { Provider } = DataContext

export const ContextProvider = ({ children }) => {
  const [PageActive, setPageActive] = useState('none')

  const browser = isBrowser()
  const root = browser && window.document.documentElement
  const initialMode = browser && root.style.getPropertyValue('--dark-mode')
  const mode = initialMode === 'dark'
  const [DarkMode, setDarkMode] = useState(mode)
  const [BodyClass, setBodyClass] = useState('')

  useEffect(() => {
    const bodyclass = []
    const colorMode = DarkMode ? 'dark' : 'light'
    bodyclass.push(colorMode)
    setBodyClass(bodyclass.join(' '))

    const arrToColors = Object.keys(toColors)
    const root = document.documentElement
    root.style.setProperty('--dark-mode', colorMode)

    for (let i = 0; i < Object.keys(toColors).length; i++) {
      const key = arrToColors[i]
      const name = `--${key.replaceAll('_', '-')}`
      root.style.setProperty(name, toColors[key][colorMode])
    }
  }, [DarkMode])

  return (
    <Provider
      value={{
        PageActive,
        setPageActive,
        DarkMode,
        setDarkMode,
        BodyClass
      }}
    >
      {children}
    </Provider>
  )
}
