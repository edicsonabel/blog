import React from "react"

import PageLayout from "../templates/pages"
import SEO from "../components/SEO"
import Navbar from "../components/Navbar"

const IndexPage = () => (
  <PageLayout >
    <SEO title="Home" type="page" />
    <Navbar active="home" />
    <h1>Edicson Abel</h1>
  </PageLayout>
)

export default IndexPage