import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

const Navbar = ({pageActive}) => {
  return(
  <nav className="navbar">
    <ul className="navbar-list flex-center">
      <li
        className={`item-home navbar-item
          ${pageActive === "home" ? "navbar-item-active" : ""}
        `}
      >
        <Link to="/" className="navbar-link flex-center">
          <i className="navbar-icon i-home" />
          <span className="navbar-text">Home</span>
        </Link>
      </li>
      <li
        className={`item-blog navbar-item
          ${pageActive === "blog" ? "navbar-item-active" : ""}
        `}
      >
        <Link to="/blog/" className="navbar-link flex-center">
          <i className="navbar-icon i-pen" />
          <span className="navbar-text">Blog</span>
        </Link>
      </li>
      <li
        className={`item-portfolio navbar-item
          ${pageActive === "portafolio" ? "navbar-item-active" : ""}
        `}
      >
        <Link to="/portafolio/" className="navbar-link flex-center">
          <i className="navbar-icon i-portfolio" />
          <span className="navbar-text">Portafolio</span>
        </Link>
      </li>
      <li
        className={`item-contact navbar-item
          ${pageActive === "contacto" ? "navbar-item-active" : ""}
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
)};

Navbar.propTypes = {
  pageActive: PropTypes.string,
};

Navbar.defaultProps = {
  pageActive: "",
};

const mapStateToProps = (state) => ({
  pageActive: state.pageActive,
});

export default connect(mapStateToProps)(Navbar);
