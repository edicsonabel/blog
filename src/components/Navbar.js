import { Link } from 'gatsby'
// import PropTypes from "prop-types";
import React, { useContext } from 'react'

/*    COMPONTENTS AND UTILS    */
import { DataContext } from '../states/context'

const Navbar = () => {
  const { PageActive } = useContext(DataContext)

  return (
    <nav className="navbar">
      <ul className="navbar-list flex-center">
        <li
          className={`item-home navbar-item
          ${PageActive === 'home' ? 'navbar-item-active' : ''}
        `}
        >
          <Link to="/" className="navbar-link flex-center">
            <i className="navbar-icon i-home" />
            <span className="navbar-text">Home</span>
          </Link>
        </li>
        <li
          className={`item-blog navbar-item
          ${PageActive === 'blog' ? 'navbar-item-active' : ''}
        `}
        >
          <Link to="/blog/" className="navbar-link flex-center">
            <i className="navbar-icon i-pen" />
            <span className="navbar-text">Blog</span>
          </Link>
        </li>
        <li
          className={`item-portfolio navbar-item
          ${PageActive === 'portafolio' ? 'navbar-item-active' : ''}
        `}
        >
          <Link to="/portafolio/" className="navbar-link flex-center">
            <i className="navbar-icon i-portfolio" />
            <span className="navbar-text">Portafolio</span>
          </Link>
        </li>
        <li
          className={`item-contact navbar-item
          ${PageActive === 'contacto' ? 'navbar-item-active' : ''}
        `}
        >
          <Link to="/contacto/" className="navbar-link flex-center">
            <i className="navbar-icon i-user" />
            <span className="navbar-text">Contacto</span>
          </Link>
        </li>
        <li className="item-search navbar-item">
          <Link to="#" className="navbar-link flex-center">
            <i className="navbar-icon i-search" />
            <span className="navbar-text">Buscar</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

// Navbar.propTypes = {
//   PageActive: PropTypes.string,
// };

// Navbar.defaultProps = {
//   PageActive: "",
// };

export default Navbar
