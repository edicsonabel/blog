import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

/*    COMPONENTS & UTILS    */
import { nowURL } from 'utils'

const Seo = ({
  description = '',
  lang = 'es',
  meta = [],
  author = '',
  image = '',
  title,
  type,
}) => {
  const [ localhost, setLocalhost ] = useState('')
  const updateURL = nowURL()
  
  useEffect(() => {
    setLocalhost(nowURL({pathname: false}))
  }, [updateURL])

  const { site, imageSharp } = useStaticQuery(
    graphql`
      query {
        imageSharp(fixed: { originalName: { eq: "og-image.jpg" } }) {
          original {
            src
          }
        }

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
  const metaImage = image || imageSharp.original.src

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
          property: `og:image`,
          content: localhost + metaImage,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
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
