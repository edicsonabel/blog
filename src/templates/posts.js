/*    LIBRARIES    */
import React, { Fragment } from "react"
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

/*    STYLES    */
import "../styles/index.sass"

/*    COMPONTENTS AND UTILS    */
import SEO from "../components/SEO"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Header from "../components/Header"

export const postInfo = () => graphql`
  query BlogPostQuery($id: String!, $author: String!) {
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

    allImageSharp(filter: { id: { eq: $author } }) {
      nodes {
        fluid(maxWidth: 400) {
          aspectRatio
          base64
          sizes
          src
          srcSet
        }
        id
      }
    }
  }
`

export const PostLayout = ({ data }) => {
  const { title, image, excerpt, author, tags, date } = data.mdx.frontmatter
  const { body, mdxExcerpt } = data.mdx
  const authorImg = data.allImageSharp.nodes[0].fluid
  return (
    <Fragment>
      <SEO title={title} description={excerpt ? excerpt : mdxExcerpt} />
      <Navbar />
      <Header title={title} image={image} tags={tags} author={author} authorImg={authorImg} date={date} />
      <main className="container main-post">
        <MDXProvider components={Link}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </main>
      <Footer />
    </Fragment>
  )
}

export default PostLayout