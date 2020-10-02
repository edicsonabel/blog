import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <Link class="d-inline-block mr-2" to="/">{siteTitle}</Link>
      <Link class="d-inline-block mr-2" to="/blog">Blog</Link>
      <Link class="d-inline-block mr-2" to="/me">Me</Link>
      <Link class="d-inline-block mr-2" to="/projects">Projects</Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header