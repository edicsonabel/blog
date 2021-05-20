/*    LIBRARIES    */
import React, { Fragment } from "react"
import PropTypes from "prop-types"

/*    STYLES    */
import "../styles/index.sass"

/*    COMPONTENTS AND UTILS    */
import Footer from "../components/Footer"

const PageLayout = ({ children }) => {
  return (
    <Fragment>
      <main className="container">{children}</main>
      <Footer />
    </Fragment>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageLayout
