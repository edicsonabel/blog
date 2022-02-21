import React, { useContext, useEffect } from 'react'

/*    COMPONTENTS AND UTILS    */
import { DataContext } from 'states/context'

const ModeButton = () => {
  const { DarkMode, setDarkMode } = useContext(DataContext)
  useEffect(() => {
    setDarkMode(DarkMode)
    localStorage.setItem('DarkMode', DarkMode)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [DarkMode])

  return (
    <button onClick={() => setDarkMode(!DarkMode)} className="mode-button">
      <span className={DarkMode ? 'i-moon-stars' : 'i-sun-cloud'}></span>
    </button>
  )
}

export default React.memo(ModeButton)
