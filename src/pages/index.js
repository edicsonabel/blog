import React from 'react'

/*    COMPONENTS & UTILS    */
import PageLayout from '../templates/pages'
import SEO from '../components/SEO'

const IndexPage = () => (
  <PageLayout active="home">
    <SEO title="Home" type="page" />
    <h1>Edicson Abel</h1>
  </PageLayout>
)

export default IndexPage
