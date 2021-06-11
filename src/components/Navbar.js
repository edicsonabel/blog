import { Link } from 'gatsby'
// import PropTypes from "prop-types";
import React, { useContext } from 'react'

/*    COMPONTENTS AND UTILS    */
import { DataContext } from '../states/context'

const Navbar = () => {
  const { PageActive } = useContext(DataContext)

  return (
    <nav className="navbar">
      <ul className="navbar__list flex-center">
        <li
          className={`navbar__item--home navbar__item
          ${PageActive === 'home' ? 'navbar__item--active' : ''}
        `}
        >
          <Link to="/" className="navbar__link flex-center">
            <i className="navbar__icon i-home" />
            <span className="navbar__text body-1">Home</span>
          </Link>
        </li>
        <li
          className={`navbar__item--blog navbar__item
          ${PageActive === 'blog' ? 'navbar__item--active' : ''}
        `}
        >
          <Link to="/blog/" className="navbar__link flex-center">
            <i className="navbar__icon i-pen" />
            <span className="navbar__text body-1">Blog</span>
          </Link>
        </li>
        <li
          className={`navbar__item--portfolio navbar__item
          ${PageActive === 'portafolio' ? 'navbar__item--active' : ''}
        `}
        >
          <Link to="/portafolio/" className="navbar__link flex-center">
            <i className="navbar__icon i-portfolio" />
            <span className="navbar__text body-1">Portafolio</span>
          </Link>
        </li>
        <li
          className={`navbar__item--contact navbar__item
          ${PageActive === 'contacto' ? 'navbar__item--active' : ''}
        `}
        >
          <Link to="/contacto/" className="navbar__link flex-center">
            <i className="navbar__icon i-user" />
            <span className="navbar__text body-1">Contacto</span>
          </Link>
        </li>
        <li className="navbar__item--search navbar__item">
          <Link to="#" className="navbar__link flex-center">
            <i className="navbar__icon i-search" />
            <span className="navbar__text body-1">Buscar</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
