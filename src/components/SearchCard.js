import React from 'react'
import { Link } from 'gatsby'
import { Highlight } from 'react-instantsearch-dom'

const SearchCard = ({ hit }) => {
  return (
    <>
      <Link className='search__card' to={`../${hit.objectID}`}>
        <h2 className='search__card__title'>
          <Highlight attribute='title' hit={hit} />
        </h2>
        <p className='search__card__description'>
          <Highlight attribute='excerpt' hit={hit} />
        </p>
      </Link>
    </>
  )
}

export default React.memo(SearchCard, (prevProps, nextProps) => {
  return prevProps.hit === nextProps.hit
})
