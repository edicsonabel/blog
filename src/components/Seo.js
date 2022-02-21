import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Seo = ({
  description = ``,
  lang = `es`,
  meta = [],
  author = '',
  title,
  type,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            twitter
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const titleSite = site.siteMetadata?.title
  const metaTitle = type === 'page' ? `${title} | ${titleSite}` : `${title}`
  const twitterAuthor = author ? `@${author}` : `@${site.siteMetadata?.twitter}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:site`,
          content: `@${site.siteMetadata?.twitter}`,
        },
        {
          name: `twitter:creator`,
          content: twitterAuthor,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

export default React.memo(Seo, (prevProps, nextProps) => {
  return prevProps.title === nextProps.title
})
