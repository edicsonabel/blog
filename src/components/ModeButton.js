import React, { useContext, useEffect } from 'react'

/*    COMPONTENTS AND UTILS    */
import { DataContext } from 'states/context'

const ModeButton = () => {
  const { DarkMode, setDarkMode } = useContext(DataContext)
  useEffect(() => {
    localStorage.setItem('DarkMode', DarkMode)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [DarkMode])

  return (
    <button onClick={() => setDarkMode(st => !st)} className="mode-button">
      <span className="dark i-moon-stars"></span>
      <span className="light i-sun-cloud"></span>
    </button>
  )
}

export default React.memo(ModeButton)
