import React from 'react'

/*    COMPONENTS & UTILS    */
import PageLayout from 'templates/pages'
import Seo from 'components/Seo'

const PortfolioPage = () => (
  <>
    <Seo title="Portafolio" type="page" />
    <PageLayout active="portfolio">
      {/* TODO: Colocar los proyectos realizados */}
      <h1>Portafolio</h1>
    </PageLayout>
  </>
)

export default React.memo(PortfolioPage)
