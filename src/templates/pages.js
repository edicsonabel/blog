/*    LIBRARIES    */
import React, { useContext, useEffect } from 'react'
import Helmet from 'react-helmet'

/*    COMPONTENTS AND UTILS    */
import { DataContext } from 'states/context'

const PageLayout = ({ active, children }) => {
  const { setPageActive, BodyClass } = useContext(DataContext)
  useEffect(() => {
    setPageActive(active)
  }, [active, setPageActive])

  return (
    <>
      <Helmet
        bodyAttributes={{
          class: BodyClass,
        }}
      />
      <main className={`container`}>{children}</main>
    </>
  )
}

export default PageLayout
