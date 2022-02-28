import React, { createContext, useState, useEffect } from 'react'

/*    COMPONENTS & UTILS    */
import { isBrowser } from 'utils'

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
    let body_class = []
    body_class.push(DarkMode ? 'dark' : 'light')
    setBodyClass(body_class.join(' '))
  }, [DarkMode])

  return (
    <Provider
      value={{
        PageActive,
        setPageActive,
        DarkMode,
        setDarkMode,
        BodyClass,
      }}
    >
      {children}
    </Provider>
  )
}
