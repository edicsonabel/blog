import React from "react"

import PageLayout from "../templates/pages"
import SEO from "../components/seo"
import Navbar from "../components/navbar"

const PortfolioPage = () => (
  <PageLayout>
    <SEO title="Portafolio" type="page" />
    <Navbar active="portafolio" />
    <h1>Portafolio</h1>
  </PageLayout>
)

export default PortfolioPage