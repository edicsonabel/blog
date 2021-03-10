/*    LIBRARIES    */
import React, { Fragment } from "react"
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

/*    STYLES    */
import '../styles/index.scss'

/*    COMPONTENTS AND UTILS    */
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import { useSiteMetadata } from "../utils/utility"
import Img from "gatsby-image"

export const postInfo = () => graphql`
query BlogPostQuery($id: String!) {
  mdx(id: { eq: $id }) {
    body
    frontmatter {
      author
      date
      excerpt
      tags
      title
      image {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    excerpt
  }
}

`

export const PostLayout = ({ data }) => {
  const site = useSiteMetadata();
  const { title, image } = data.mdx.frontmatter
  const { body } = data.mdx

  return (
    <Fragment>
      <SEO title={title} />
      <Header siteTitle={site.title} />
      <main>
        <Img fluid={image.childImageSharp.fluid} />
        <MDXProvider components={Link}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </main>
      <Footer />
    </Fragment>
  )
}

export default PostLayout