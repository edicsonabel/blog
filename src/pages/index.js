import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

/*    COMPONENTS & UTILS    */
import PageLayout from 'templates/pages'
import Seo from 'components/Seo'
import Card from 'components/Card'

const IndexPage = () => {
  const postsQuery = graphql`
    query {
      imageSharp(fixed: { originalName: { eq: "edicson-abel-profile.webp" } }) {
        gatsbyImageData
      }

      allAuthorsJson {
        nodes {
          name
          user
          img {
            childImageSharp {
              gatsbyImageData(width: 100)
            }
          }
        }
      }

      allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 3) {
        edges {
          node {
            id
            slug
            excerpt
            frontmatter {
              title
              author
              date
              tags
              image {
                childImageSharp {
                  gatsbyImageData(width: 600)
                }
              }
            }
          }
        }
      }
    }
  `

  return (
    <>
      <Seo
        title="🚀 JavaScript, React, Node, Linux y más"
        description="Te ayudaré en tu camino de desarrollador Front-End y Back-End, así dominaremos el mundo"
        type="page"
      />
      <PageLayout active="home">
        <StaticQuery
          query={postsQuery}
          render={data => {
            const authors = data.allAuthorsJson.nodes
            return (
              <>
                <section className="home__main full-width container">
                  <figure className="home__main__cover">
                    <GatsbyImage
                      className="home__main__cover__img"
                      image={data.imageSharp.gatsbyImageData}
                      alt="Edicson Abel"
                    />
                  </figure>
                  <div className="home__main__text-wrapper">
                    <h1 className="home__main__text-wrapper__title">
                      Edicson Abel
                    </h1>
                    <p className="home__main__text-wrapper__description">
                      <span className="d-block bold">Web Developer </span>
                      <span className="body-2">
                        Te ayudaré en tu camino como desarrollador(a){' '}
                        <span className="d-inline-block">Front-End</span> y{' '}
                        <span className="d-inline-block">Back-End,</span> así
                        dominaremos el mundo 💪🏻😎.
                      </span>
                    </p>
                    <Link className="home__main__action" to="/me/">
                      Más sobre mí
                    </Link>
                  </div>
                </section>
                <section className="home__posts">
                  <h2 className="home__posts__title">Artículos recientes</h2>
                  <div className="card__grid">
                    {data.allMdx.edges.map(({ node }) => (
                      <Card
                        key={node.id}
                        data={{
                          slug: node.slug,
                          image:
                            node.frontmatter.image.childImageSharp
                              .gatsbyImageData,
                          title: node.frontmatter.title,
                          tags: node.frontmatter.tags,
                          author: authors.filter(
                            author => author.user === node.frontmatter.author
                          )[0],
                          excerpt: node.excerpt,
                        }}
                      />
                    ))}
                  </div>
                </section>
              </>
            )
          }}
        />
      </PageLayout>
    </>
  )
}

export default React.memo(IndexPage)
