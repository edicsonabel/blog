/*    LIBRARIES    */
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'gatsby'

/*    COMPONTENTS AND UTILS    */
import { DataContext } from 'states/context'
import PageLayout from 'templates/pages'
import Seo from 'components/Seo'
import imgAstronaut from 'assets/images/astronaut.png'
import { nowURL } from 'utils'
const NotFoundPage = () => {
  const { setPageActive } = useContext(DataContext)
  const [NOW_URL, setURL] = useState(nowURL({ host: false }))

  useEffect(() => {
    setPageActive('none')
  }, [setPageActive])

  useEffect(() => {
    setURL(nowURL({ host: false }))
  }, [NOW_URL])

  return (
    <>
      <Seo title='404: Not found' type='page' />
      <PageLayout>
        <section className='error-404'>
          <h1 className='error-404__title'>404</h1>
          <span className='error-404__msg subtitle-1'>
            Ehhhh... Houston, tenemos un problema. La dirección <code>{NOW_URL}</code> se fue por un agujero negro
          </span>
          <figure className='error-404__cover'>
            <img
              className='error-404__img'
              src={imgAstronaut}
              alt='Astronauta 404'
            />
          </figure>
        </section>
        <Link className='error-404__action' to='/'>
          Volver a Houston
        </Link>
      </PageLayout>
    </>
  )
}

export default React.memo(NotFoundPage)
