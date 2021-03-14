import React, { Fragment } from "react"
import { Link } from "gatsby"
import { graphql, StaticQuery } from "gatsby"
import PageLayout from "../templates/pages"
import SEO from "../components/SEO"
import Navbar from "../components/Navbar"
import Img from "gatsby-image"
import { slugify } from "../utils/utility"

const blogQuery = graphql`
query{
  allMdx(sort: {fields: [frontmatter___date], order: DESC}) {
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
  <PageLayout>
    <SEO title="Blog" type="page" />
    <Navbar active="blog" />
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
              {node.frontmatter.tags.map(tag => (
                <Fragment>
                  {" | "}
                  <Link to={`/tags/${slugify(tag)}`}>{tag}</Link>
                </Fragment>
              ))}
            </div>
          ))}
        </Fragment>
      )}
    />
  </PageLayout>
)

export default BlogPage