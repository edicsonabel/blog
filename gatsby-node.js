const path = require('path')

const imgToName = img => img.split('.').slice(0, -1).join('.')

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions
  const postTemplate = path.resolve(`./src/templates/posts.js`)
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            slug
            frontmatter {
              author
            }
          }
        }
      }

      allImageSharp {
        nodes {
          fluid {
            originalName
          }
          id
        }
      }

      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }
  // Create blog post pages.
  const posts = result.data.allMdx.edges
  const site = result.data.site.siteMetadata
  const images = result.data.allImageSharp.nodes
  // you'll call `createPage` for each result
  posts.forEach(({ node }, index) => {
    const authorImg = images.filter(
      img => imgToName(img.fluid.originalName) === node.frontmatter.author
    )[0].id
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: node.slug,
      site: site.title,
      // This component will wrap our MDX content
      component: postTemplate,
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id, author: authorImg },
    })
  })
}
