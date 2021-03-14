import React from "react"

import PageLayout from "../templates/pages"
import SEO from "../components/seo"
import Navbar from "../components/navbar"

const TagsPage = () => (
  <PageLayout>
    <SEO title="Tags" />
    <Navbar />
    <h1>Tags</h1>
  </PageLayout>
)

export default TagsPage