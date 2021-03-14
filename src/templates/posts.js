/*    LIBRARIES    */
import React, { Fragment } from "react"
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

/*    STYLES    */
import '../styles/index.scss'

/*    COMPONTENTS AND UTILS    */
import SEO from "../components/seo"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
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
}`

export const PostLayout = ({ data }) => {
  const { title, image, excerpt } = data.mdx.frontmatter
  const { body, mdxExcerpt} = data.mdx

  return (
    <Fragment>
      <SEO title={title} description={excerpt ? excerpt : mdxExcerpt} />
      <Navbar />
        <Img fluid={image.childImageSharp.fluid} />
      <main className='container main-post'>
        <MDXProvider components={Link}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </main>
      <Footer />
    </Fragment>
  )
}

export default PostLayout