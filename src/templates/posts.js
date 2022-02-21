/*    LIBRARIES    */
import React, { useContext, useEffect } from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

/*    COMPONTENTS AND UTILS    */
import Seo from 'components/Seo'
import Header from 'components/Header'
import CodeBlock from 'components/CodeBlock'
import { DataContext } from 'states/context'

export const postInfo = graphql`
  query BlogPostQuery($id: String!, $author: String!) {
    mdx(id: { eq: $id }) {
      body
      internal {
        content
      }
      frontmatter {
        author
        date
        excerpt
        tags
        title
        image {
          childImageSharp {
            gatsbyImageData(width: 1200)
          }
          publicURL
        }
      }
      excerpt
    }

    allAuthorsJson(filter: { id: { eq: $author } }) {
      nodes {
        id
        name
        user
        twitter
        img {
          childImageSharp {
            gatsbyImageData(width: 100)
          }
        }
      }
    }
  }
`

const PostLayout = ({ data }) => {
  const { setPageActive, BodyClass } = useContext(DataContext)

  const components = {
    Link,
    pre: props => <div {...props} />,
    code: CodeBlock,
  }

  useEffect(() => {
    setPageActive('blog')
  }, [setPageActive])

  const { title, image, excerpt, tags, date } = data.mdx.frontmatter
  const { body, mdxExcerpt, internal } = data.mdx
  const author = data.allAuthorsJson.nodes[0]
  const averageWPM = 200
  const readTime = Math.ceil(internal.content.split(' ').length / averageWPM)

  return (
    <>
      <Helmet
        bodyAttributes={{
          class: BodyClass,
        }}
      />
      <Seo
        title={title}
        description={excerpt ? excerpt : mdxExcerpt}
        author={author.twitter}
        image={image.publicURL}
      />
      <Header
        title={title}
        image={image.childImageSharp.gatsbyImageData}
        tags={tags}
        authorName={author.name}
        authorUser={author.user}
        authorImg={author.img.childImageSharp.gatsbyImageData}
        authorTwitter={author.twitter}
        date={date}
        readTime={readTime}
      />
      <main className="container main-post">
        <MDXProvider components={components}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </main>
    </>
  )
}

export default PostLayout
