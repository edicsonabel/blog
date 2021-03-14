import React from "react"

import PageLayout from "../templates/pages"
import SEO from "../components/SEO"
import Navbar from "../components/Navbar"

const ContactPage = () => (
  <PageLayout>
    <SEO title="Contacto" type="page" />
    <Navbar active="contacto" />
    <h1>Contacto</h1>
  </PageLayout>
)

export default ContactPage