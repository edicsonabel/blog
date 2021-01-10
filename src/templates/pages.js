/*    LIBRARIES    */
import React, { Fragment } from "react"
import PropTypes from "prop-types"

/*    STYLES    */
import '../styles/index.scss'

/*    COMPONTENTS AND UTILS    */
import Header from "../components/header"
import Footer from "../components/footer"
import { useSiteMetadata } from "../utils/utility"

const PageLayout = ({ children }) => {
  const site = useSiteMetadata();
  return (
    <Fragment>
    <Header siteTitle={ site.title } />
    <main className='container'>{children}</main>
    <Footer />
    </Fragment>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageLayout