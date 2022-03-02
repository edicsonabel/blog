import React, { useState } from 'react'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom'
import svgAlgolia from 'assets/images/algolia-logo.svg'

/*    COMPONENTS & UTILS    */
import PageLayout from 'templates/pages'
import Seo from 'components/Seo'
import SearchCard from 'components/SearchCard'

const SearchPage = () => {
  const [firstLoad, setLoad] = useState(true)
  const [showResults, setShowResults] = useState('')

  const algoliaClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_API_KEY
  )

  const searchClient = {
    ...algoliaClient,
    search (requests) {
      setShowResults(requests[0].params.query)

      if (firstLoad) {
        setLoad(false)
        return
      }

      return algoliaClient.search(requests)
    }
  }

  return (
    <>
      <Seo title='Buscar' type='page' />
      <PageLayout active='search'>
        <InstantSearch
          searchClient={searchClient}
          indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME_POSTS}
        >
          <SearchBox
            autoFocus
            className='search__box'
            translations={{
              submitTitle: 'Buscar',
              resetTitle: 'Limpiar',
              placeholder: 'Qué estás buscando? 🤔'
            }}
          />
          {showResults ? <Hits hitComponent={SearchCard} /> : null}
          {showResults
            ? (
              <a
                className='search__sponsor'
                href='https://www.algolia.com/docsearch'
                rel='nofollow noopener noreferrer'
                target='_blank'
              >
                Búsqueda por{' '}
                <img
                  className='search__sponsor__img'
                  src={svgAlgolia}
                  alt='Algolia Logo'
                />
              </a>
              )
            : null}
        </InstantSearch>
      </PageLayout>
    </>
  )
}

export default React.memo(SearchPage)
