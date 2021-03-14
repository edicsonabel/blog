import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

// Images
import imgHome from "../images/home.svg"
import imgBlog from "../images/pen.svg"
import imgPortfolio from "../images/portfolio.svg"
import imgUser from "../images/user.svg"
import imgSearch from "../images/search.svg"

const Navbar = ({ active }) => (
    <nav className="navbar">
      <ul className="navbar-list flex-center">
        <li
          className={`item-home navbar-item
          ${ active === "home" ? "navbar-item-active" : ""}
        `}
        >
          <Link to="/" className="navbar-link flex-center">
            <img className="navbar-icon" src={imgHome} alt="Edicson Abel" />
            <span className="navbar-text">Home</span>
          </Link>
        </li>
        <li
          className={`item-blog navbar-item
          ${ active === "blog" ? "navbar-item-active" : ""}
        `}
        >
          <Link to="/blog/" className="navbar-link flex-center">
            <img className="navbar-icon" src={imgBlog} alt="Blog" />
            <span className="navbar-text">Blog</span>
          </Link>
        </li>
        <li
          className={`item-portfolio navbar-item
          ${ active === "portafolio" ? "navbar-item-active" : ""}
        `}
        >
          <Link to="/portafolio/" className="navbar-link flex-center">
            <img className="navbar-icon" src={imgPortfolio} alt="Portafolio" />
            <span className="navbar-text">Portafolio</span>
          </Link>
        </li>
        <li
          className={`item-contact navbar-item
          ${ active === "contacto" ? "navbar-item-active" : ""}
        `}
        >
          <Link to="/contacto/" className="navbar-link flex-center">
            <img className="navbar-icon" src={imgUser} alt="Contacto" />
            <span className="navbar-text">Contacto</span>
          </Link>
        </li>
        <li className="item-search navbar-item">
          <Link to="#" className="navbar-link flex-center">
            <img className="navbar-icon" src={imgSearch} alt="Search" />
          </Link>
        </li>
      </ul>
    </nav>
  )

Navbar.propTypes = {
  active: PropTypes.string
}

export default Navbar