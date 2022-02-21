import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

/*    COMPONENTS & UTILS    */
import Tag from 'components/Tag'
import { dateFormat, nowURL } from 'utils'

const Header = ({
  image,
  title,
  tags,
  authorName,
  authorUser,
  authorImg,
  authorTwitter,
  date,
  readTime,
}) => {
  const NOW_URL = nowURL()

  return (
    <header>
      <GatsbyImage className="header__image" image={image} alt={title} />
      <div className="header__box">
        <h1 className="header__title title-1 text-center">{title}</h1>
        <div className="tag__box">
          {tags.map(tag => (
            <Tag key={tag} name={tag} />
          ))}
        </div>
        <div className="header__footer">
          <div className="header__info">
            <Link
              to={`/author/${authorUser}/`}
              className="header__info__box"
              alt={authorName}
            >
              <GatsbyImage
                className="header__info__image"
                image={authorImg}
                alt={authorName}
              />
              <span className="header__info__author">{authorName}</span>
            </Link>
            <span className="header__info__date">{dateFormat(date)}</span>
            <span className="header__info__reading-time">{`${readTime} min read`}</span>
          </div>
          <div className="header__action">
            <a
              href={`https://twitter.com/intent/tweet?text=${title} by %40${authorTwitter} &url=${NOW_URL}`}
              className="header__action__link"
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label="Compartir en Twitter"
            >
              <i className="i-twitter"></i>
            </a>
            <a
              href={`https://facebook.com/sharer/sharer.php?u=${NOW_URL}`}
              className="header__action__link"
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label="Compartir en Facebook"
            >
              <i className="i-facebook"></i>
            </a>
            <a
              href={`https://linkedin.com/shareArticle?mini=true&url=${NOW_URL}`}
              className="header__action__link"
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label="Compartir en LinkedIn"
            >
              <i className="i-linkedin"></i>
            </a>
            <button
              onClick={() => navigator.clipboard.writeText(NOW_URL)}
              className="header__action__link"
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label="Copiar enlace"
            >
              <i className="i-link"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default React.memo(Header, (prevProps, nextProps) => {
  return prevProps.title === nextProps.title
})
