import React from "react"

import PageLayout from "../templates/pages"
import SEO from "../components/seo"
import Navbar from "../components/navbar"

const IndexPage = () => (
  <PageLayout >
    <SEO title="Home" type="page" />
    <Navbar active="home" />
    <h1>Edicson Abel</h1>
  </PageLayout>
)

export default IndexPage