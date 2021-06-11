import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

/*    COMPONENTS & UTILS    */
import PageLayout from '../templates/pages'
import SEO from '../components/SEO'
import Tag from '../components/Tag'

const blogQuery = graphql`
  query {
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
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
const BlogPage = () => (
  <PageLayout active="blog">
    <SEO title="Blog" type="page" />
    <h1>Blog</h1>
    <StaticQuery
      query={blogQuery}
      render={data => (
        <Fragment>
          {data.allMdx.edges.map(({ node }) => (
            <div key={node.id}>
              <Link className="mr-2" to={`/${node.slug}`}>
                <Img fluid={node.frontmatter.image.childImageSharp.fluid} />
                {node.frontmatter.title}
              </Link>
              <div className="tag__box">
                {node.frontmatter.tags.map(tag => (
                  <Tag key={tag} name={tag} />
                ))}
              </div>
            </div>
          ))}
        </Fragment>
      )}
    />
  </PageLayout>
)

export default BlogPage
