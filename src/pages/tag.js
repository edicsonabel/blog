import React from 'react'

/*    COMPONENTS & UTILS    */
import PageLayout from 'templates/pages'
import Seo from 'components/Seo'

const TagsPage = () => (
  <>
    <Seo title="Tags" />
    <PageLayout>
      {/* TODO: Presentar las etiquetas del blog y busqueda por :id */}
      <h1>Tags</h1>
    </PageLayout>
  </>
)

export default React.memo(TagsPage)
