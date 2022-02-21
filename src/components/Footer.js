import React from 'react'
import { Link } from 'gatsby'

/*    COMPONENTS & UTILS    */
import { useSiteMetadata } from 'utils'

const Footer = () => {
  const site = useSiteMetadata()
  return (
    <footer className="footer">
      <svg
        className="footer__wave"
        viewBox="0 0 100 76"
        preserveAspectRatio="none"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M100 76C48.4642 -25.3333 20.6143 -25.3333 0 76L100 76Z" />
      </svg>
      {/* <svg
        className="footer__wave"
        viewBox="0 0 1440 74"
        preserveAspectRatio="none"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"></path>
      </svg> */}
      <section className="footer__social">
        <a
          href={`https://www.linkedin.com/in/${site.linkedin}/`}
          className="footer__social__link"
          rel="nofollow noopener noreferrer"
          target="_blank"
          aria-label="LinkedIn"
        >
          <i className={`i-linkedin`}></i>
        </a>
        <a
          href={`https://twitter.com/${site.twitter}`}
          className="footer__social__link"
          rel="nofollow noopener noreferrer"
          target="_blank"
          aria-label="Twitter"
        >
          <i className={`i-twitter`}></i>
        </a>
        <a
          href={`https://github.com/${site.github}`}
          className="footer__social__link"
          rel="nofollow noopener noreferrer"
          target="_blank"
          aria-label="GitHub"
        >
          <i className={`i-github`}></i>
        </a>
        <a
          href={`https://gitlab.com/${site.gitlab}`}
          className="footer__social__link"
          rel="nofollow noopener noreferrer"
          target="_blank"
          aria-label="GitLab"
        >
          <i className={`i-gitlab`}></i>
        </a>
      </section>
      <section className="footer__copyright">
        <p>
          © {new Date().getFullYear()}
          {` `}
          <Link to="/">{site.title}</Link>
          {` `}
          <span>All rights reserved</span>
        </p>
      </section>
    </footer>
  )
}

export default React.memo(Footer)
