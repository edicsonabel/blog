import path from 'path'

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions
  const postTemplate = path.resolve(`./src/templates/posts.js`)
  const tagTemplate = path.resolve(`./src/templates/tags.js`)
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            slug
            frontmatter {
              author
              tags
            }
          }
        }
      }

      allAuthorsJson {
        nodes {
          id
          user
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

  let allTags = []

  // Create blog post pages.
  const posts = result.data.allMdx.edges
  const { title } = result.data.site.siteMetadata
  const authors = result.data.allAuthorsJson.nodes
  posts.forEach(({ node }) => {
    const author = authors.filter(
      auth => auth.user === node.frontmatter.author
    )[0].id
    const tags = node.frontmatter.tags
    if (tags) {
      allTags = [...allTags, ...tags]
    }
    allTags = [...new Set(allTags)]
    createPage({
      path: node.slug,
      site: title,
      component: postTemplate,
      context: { id: node.id, author },
    })
  })

  // Create tags pages
  if (allTags.length) {
    allTags.forEach(tagName => {
      createPage({
        path: `/tag/${tagName}/`,
        site: title,
        component: tagTemplate,
        context: { tag: tagName },
      })
    })
  }
}
