import React from "react"
import PageLayout from "../templates/pages"
import SEO from "../components/seo"
import Navbar from "../components/navbar"

const NotFoundPage = () => (
  <PageLayout>
    <SEO title="404: Not found" type="page" />
    <Navbar />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </PageLayout>
)

export default NotFoundPage