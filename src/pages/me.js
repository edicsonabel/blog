import React from 'react'

/*    COMPONENTS & UTILS    */
import PageLayout from 'templates/pages'
import Seo from 'components/Seo'

const ContactPage = () => (
  <>
    <Seo title="Sobre mí" type="page" />
    <PageLayout active="me">
      <h1>Sobre mí</h1>
    </PageLayout>
  </>
)

export default React.memo(ContactPage)
