import React, { Fragment } from "react"
import { Link } from "gatsby"

import "../styles/index.scss"
import { useSiteMetadata } from "../utils/utility"

export const Footer = () => {
const site = useSiteMetadata()
return (
  <Fragment>
    <footer className="container">
    © {new Date().getFullYear()}, Built with
    {` `}
    <Link to="/">{site.title}</Link>
    </footer>
  </Fragment>
  )
}
export default Footer