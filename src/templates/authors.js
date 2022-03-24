/*    LIBRARIES    */
import React, { useContext, useEffect } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

/*    COMPONTENTS AND UTILS    */
import Seo from 'components/Seo'
import Card from 'components/Card'
import { DataContext } from 'states/context'

export const authorInfo = graphql`
  query AuthorQuery($author: String!) {
    allMdx(filter: { frontmatter: { author: { eq: $author } } }) {
      edges {
        node {
          id
          slug
          excerpt
          frontmatter {
            title
            author
            date
            tags
            image {
              childImageSharp {
                gatsbyImageData(width: 1200)
              }
            }
          }
        }
      }
    }

    allAuthorsJson {
      nodes {
        name
        user
        img {
          childImageSharp {
            gatsbyImageData(width: 100)
          }
        }
      }
    }
  }
`

const AuthorLayout = ({ data, pageContext }) => {
  const { setPageActive, BodyClass } = useContext(DataContext)

  useEffect(() => {
    setPageActive('author')
  }, [setPageActive])

  const authors = data.allAuthorsJson.nodes
  return (
    <>
      <Helmet
        bodyAttributes={{
          class: BodyClass
        }}
      />
      <Seo title={`Autor ${pageContext.name}`} type='page' />
      <main className='container'>
        <h1>{`Autor "${pageContext.name}"`}</h1>
        <section className='card__grid'>
          {data.allMdx.edges.map(({ node }) => (
            <Card
              key={node.id}
              data={{
                slug: node.slug,
                image: node.frontmatter.image.childImageSharp.gatsbyImageData,
                title: node.frontmatter.title,
                tags: node.frontmatter.tags,
                author: authors.filter(
                  author => author.user === node.frontmatter.author
                )[0],
                excerpt: node.excerpt
              }}
            />
          ))}
        </section>
      </main>
    </>
  )
}

export default AuthorLayout
