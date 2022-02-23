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
  // const [localhost, setLocalhost] = useState('')
  const [NOW_URL, setURL] = useState('')
  const updateURL = nowURL()

  useEffect(() => {
    // setLocalhost(nowURL({ pathname: false }))
    setURL(nowURL())
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
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const titleSite = site.siteMetadata?.title
  const metaTitle = type === 'page' ? `${title} | ${titleSite}` : `${title}`
  const metaType = type === 'page' ? 'website' : 'article'
  const twitterAuthor = author ? `${author}` : `${site.siteMetadata?.twitter}`
  const metaImage = `${site.siteMetadata?.siteUrl}${image || imageSharp.original.src}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      link={[
        {
          rel: `image_src`,
          href: metaImage,
        },
      ]}
      meta={[
        {
          name: `title`,
          property: `og:title`,
          content: metaTitle,
        },
        {
          name: `description`,
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: NOW_URL,
        },
        {
          name: `image`,
          property: `og:image`,
          content: metaImage,
        },
        {
          property: `og:image:alt`,
          content: metaTitle,
        },
        {
          property: `og:type`,
          content: metaType,
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
          content: `@${twitterAuthor}`,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: metaImage,
        },
      ].concat(meta)}
    />
  )
}

export default React.memo(Seo, (prevProps, nextProps) => {
  return prevProps.title === nextProps.title
})
