import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

/*    COMPONENTS & UTILS    */
import Tag from '../components/Tag'
import { slugify, dateFormat } from '../utils/utility'

const Header = ({ image, title, tags, author, authorImg, date }) => (
  <header>
    <Img className="header__image" fluid={image.childImageSharp.fluid} />
    <div className="header__box">
      <h1 className="title-1 text-center">{title}</h1>
      <div className="tag__box">
        {tags.map(tag => (
          <Tag key={tag} name={tag} />
        ))}
      </div>
      <div className="header__action">
        <Link className="header__action__box" to={`/author/${slugify(author)}`}>
          <Img className="header__action__image" fluid={authorImg} />
          <span className="header__action__author body-2">{author}</span>
        </Link>
        <span className="header__action__date body-2">{dateFormat(date)}</span>
      </div>
    </div>
  </header>
)

export default Header
