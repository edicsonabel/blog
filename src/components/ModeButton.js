import React, { useContext, useEffect } from 'react'

/*    COMPONTENTS AND UTILS    */
import { DataContext } from 'states/context'

const ModeButton = () => {
  const { DarkMode, setDarkMode } = useContext(DataContext)
  useEffect(() => {
    window.localStorage.setItem('DarkMode', DarkMode)
  }, [DarkMode])

  return (
    <button onClick={() => setDarkMode(st => !st)} className='mode-button'>
      <span className='dark i-moon-stars' />
      <span className='light i-sun-cloud' />
    </button>
  )
}

export default React.memo(ModeButton)
