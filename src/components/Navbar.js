import { Link } from 'gatsby'
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
            <span className="navbar__text">Home</span>
          </Link>
        </li>
        <li
          className={`navbar__item--blog navbar__item
          ${PageActive === 'blog' ? 'navbar__item--active' : ''}
        `}
        >
          <Link to="/blog/" className="navbar__link flex-center">
            <i className="navbar__icon i-pen" />
            <span className="navbar__text">Blog</span>
          </Link>
        </li>
        <li
          className={`navbar__item--portfolio navbar__item
          ${PageActive === 'portfolio' ? 'navbar__item--active' : ''}
        `}
        >
          <Link to="/portfolio/" className="navbar__link flex-center">
            <i className="navbar__icon i-portfolio" />
            <span className="navbar__text">Portafolio</span>
          </Link>
        </li>
        <li
          className={`navbar__item--me navbar__item
          ${PageActive === 'me' ? 'navbar__item--active' : ''}
        `}
        >
          <Link to="/me/" className="navbar__link flex-center">
            <i className="navbar__icon i-user" />
            <span className="navbar__text">Sobre mí</span>
          </Link>
        </li>
        <li
          className={`navbar__item--search navbar__item
          ${PageActive === 'search' ? 'navbar__item--active' : ''}
        `}
        >
          <Link to="/search/" className="navbar__link flex-center button">
            <i className="navbar__icon i-search" />
            <span className="navbar__text">Buscar</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default React.memo(Navbar)
