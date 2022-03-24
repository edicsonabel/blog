import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

/*    COMPONENTS & UTILS    */
import PageLayout from 'templates/pages'
import Seo from 'components/Seo'
import Card from 'components/Card'

const BlogPage = () => {
  const postsQuery = graphql`
    query {
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

      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
    }
  `
  return (
    <>
      <Seo title='Blog' type='page' />
      <PageLayout active='blog'>
        <h1>Blog</h1>
        <StaticQuery
          query={postsQuery}
          render={data => {
            const authors = data.allAuthorsJson.nodes
            return (
              <section className='card__grid'>
                {data.allMdx.edges.map(({ node }) => (
                  <Card
                    key={node.id}
                    data={{
                      slug: node.slug,
                      image:
                        node.frontmatter.image.childImageSharp.gatsbyImageData,
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
            )
          }}
        />
      </PageLayout>
    </>
  )
}

export default React.memo(BlogPage)
