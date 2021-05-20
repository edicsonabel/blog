import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return site.siteMetadata
}

export const slugify = text => (
  text
  .toString()
  .toLowerCase()
    .replace(/\s+/g, '-')       // Replace spaces with -
    .replace(/[^\w-]+/g, '')    // Remove all non-word chars
    .replace(/--+/g, '-')       // Replace multiple - with single -
    .replace(/^-+/, '')         // Trim - from start of text
    .replace(/-+$/, '')         // Trim - from end of text
    )

export const isBrowser = () => typeof window !== "undefined"

export const nowURL = () => {
  if( !isBrowser() ){ return; }
  const {protocol, host, pathname} = window.location
  let URL = protocol
  URL+= host? "//" + host: ""
  URL+= pathname? pathname: ""
  return URL
}

export const dateFormat = dateString => {
  const date = new Date(dateString)
  const ye = new Intl.DateTimeFormat('es', {year: 'numeric'}).format(date)
  const mo = new Intl.DateTimeFormat('es', {month: 'short'}).format(date)
  const da = new Intl.DateTimeFormat('es', {day: '2-digit'}).format(date)
  return `${da}/${mo}/${ye}`
}