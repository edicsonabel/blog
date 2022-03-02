/*    LIBRARIES    */
import React, { useContext, useEffect } from 'react'
import { Link } from 'gatsby'

/*    COMPONTENTS AND UTILS    */
import { DataContext } from 'states/context'
import PageLayout from 'templates/pages'
import Seo from 'components/Seo'
import imgAstronaut from 'assets/images/astronaut.png'

const NotFoundPage = () => {
  const { setPageActive } = useContext(DataContext)

  useEffect(() => {
    setPageActive('none')
  }, [setPageActive])

  return (
    <>
      <Seo title='404: Not found' type='page' />
      <PageLayout>
        <section className='error-404'>
          <h1 className='error-404__title'>404</h1>
          {/* <span className="error-404__msg subtitle-1">Houston, tenemos un problema</span> */}
          <span className='error-404__msg subtitle-1'>
            Hemos buscado hasta en los agujeros negros y no hemos encontrado
            esta dirección
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
