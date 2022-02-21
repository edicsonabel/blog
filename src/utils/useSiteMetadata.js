import { useStaticQuery, graphql } from 'gatsby'

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            description
            author
            facebook
            github
            gitlab
            instagram
            linkedin
            twitter
            youtube
          }
        }
      }
    `
  )
  return site.siteMetadata
}
