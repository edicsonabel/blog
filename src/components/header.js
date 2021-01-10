import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="container">
    <ul className="d-flex justify-content-between">
      <li><Link className="mr-2" to="/">{siteTitle}</Link></li>
      <li><Link className="mr-2" to="/blog/">Blog</Link></li>
      {/*<Link className="mr-2" to="/me/">Me</Link>*/}
      {/*<Link className="mr-2" to="/projects/">Projects</Link>*/}
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header