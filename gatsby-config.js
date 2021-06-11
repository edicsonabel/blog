module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: `Edicson Abel`,
    description: `Aprende a programar con JavaScript, React, Node, Linux y más. Te ayudaré en tu camino de desarrollador Front-End y Back-End, así dominaremos el mundo`,
    author: `@edicsonabel_`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `⚡ Edicson Abel`,
        short_name: `⚡EA`,
        start_url: `/`,
        background_color: `#242325`,
        theme_color: `#242325`,
        display: `minimal-ui`,
        icon: `src/images/icon.svg`,
      },
    },
  ],
}
