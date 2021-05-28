import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

/*    COMPONENTS & UTILS    */
import Tag from '../components/Tag'
import { slugify, dateFormat } from '../utils/utility'

const Header = ({ image, title, tags, author, authorImg, date }) => (
  <header>
    <Img className="header-image" fluid={image.childImageSharp.fluid} />
    <div className="header-box">
      <h1 className="title-1 text-center">{title}</h1>
      <div className="tag-box">
        {tags.map(tag => (
          <Tag key={tag} name={tag} />
        ))}
      </div>
      <div className="header-action">
        <Link className="header-action-box" to={`/author/${slugify(author)}`}>
          <Img className="header-action-image" fluid={authorImg} />
          <span className="body-2">{author}</span>
        </Link>
        <span className="header-action-date">{dateFormat(date)}</span>
      </div>
    </div>
  </header>
)

export default Header
