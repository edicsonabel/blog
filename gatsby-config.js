require('dotenv').config()
const path = require('path')

const arrPlugins = [
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-sass',
  'gatsby-plugin-root-import',
  'gatsby-plugin-image',
  'gatsby-plugin-sharp',
  'gatsby-transformer-sharp',
  'gatsby-transformer-json',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: path.join(__dirname, 'src/assets/images')
    }
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'posts',
      path: path.join(__dirname, 'src/posts')
    }
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'data',
      path: path.join(__dirname, 'src/data')
    }
  },
  {
    resolve: 'gatsby-plugin-mdx',
    options: {
      extensions: ['.md', '.mdx'],
      gatsbyRemarkPlugins: [
        {
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 1200
          }
        }
      ]
    }
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: '⚡ Edicson Abel',
      short_name: '⚡EA',
      start_url: '/',
      background_color: '#000a14',
      theme_color: '#000a14',
      display: 'minimal-ui',
      icon: 'src/assets/icon.svg'
    }
  }
]

const getAllPosts = `
{
  allAuthorsJson {
    nodes {
      name
      user
    }
  }
  allMdx(sort: {fields: [frontmatter___date], order: DESC}) {
    edges {
      node {
        slug
        excerpt
        frontmatter {
          title
          author
          date
          tags
        }
      }
    }
  }
}
`

const queries = [
  {
    query: getAllPosts,
    transformer: ({ data }) => {
      const authors = data.allAuthorsJson.nodes
      const posts = data.allMdx.edges.map(({ node }) => ({
        objectID: node.slug,
        title: node.frontmatter.title,
        excerpt: node.excerpt,
        date: node.frontmatter.date,
        tags: node.frontmatter.tags,
        author: authors.filter(
          author => author.user === node.frontmatter.author
        )[0]
      }))
      return posts
    }
  }
]

const configAlgolia = {
  resolve: 'gatsby-plugin-algolia',
  options: {
    appId: process.env.GATSBY_ALGOLIA_APP_ID,
    apiKey: process.env.GATSBY_ALGOLIA_ADMIN_API_KEY,
    indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME_POSTS, // for all queries
    queries,
    chunkSize: 10000 // default: 1000
  }
}

const configRobots = {
  resolve: 'gatsby-plugin-robots-txt',
  options: {
    policy: [{ userAgent: '*', allow: '/', disallow: ['/search'] }],
    sitemap: null
  }
}

if (process.env.GATSBY_BUILD_SERVER) {
  arrPlugins.push(configAlgolia)
  arrPlugins.push(configRobots)
}

module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: 'Edicson Abel',
    description: 'Aprende a programar con JavaScript, React, Node, Linux y más. Te ayudaré en tu camino de desarrollador Front-End y Back-End, así dominaremos el mundo',
    author: '@edicsonabel_',
    siteUrl: 'https://edicsonabel.com',
    facebook: 'EdicsonAbel',
    github: 'edicsonabel',
    gitlab: 'edicsonabel',
    instagram: 'edicsonabel_',
    linkedin: 'edicsonabel',
    twitter: 'edicsonabel_',
    youtube: 'EdicsonAbel'
  },
  plugins: arrPlugins
}
