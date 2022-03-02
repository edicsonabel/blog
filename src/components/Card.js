import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

/*    COMPONENTS & UTILS    */
import Tag from 'components/Tag'

const Card = ({ data: { slug, image, title, tags, author, excerpt } }) => {
  return (
    <>
      <div className='card'>
        <Link to={`/${slug}`}>
          <GatsbyImage className='card__image' image={image} alt={title} />
        </Link>
        <div className='card__box'>
          <Link className='card__author' to={`/author/${author.user}`}>
            <GatsbyImage
              className='card__author__thumb'
              image={author.img.childImageSharp.gatsbyImageData}
              alt={author.name}
            />
            <p className='card__author__name body-2'>{author.name}</p>
          </Link>
          {tags[0] ? <Tag className='card__tag' name={tags[0]} /> : null}
        </div>
        <Link className='card__overlay' to={`/${slug}`}>
          <div className='card__header'>
            <h2 className='card__title subtitle-1'>{title}</h2>
          </div>
          <p className='card__description body-2'>{excerpt}</p>
        </Link>
      </div>
    </>
  )
}

export default React.memo(Card, (prevProps, nextProps) => {
  return prevProps.data.slug === nextProps.data.slug
})
