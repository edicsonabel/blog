import React from 'react'
import { Link } from 'gatsby'

/*    COMPONTENTS AND UTILS    */
import { slugify } from 'utils'

const Tag = ({ name }) => {
  const nameUrl = slugify(name)
  return (
    <Link
      key={nameUrl}
      className={`body-2 tag tag--${nameUrl}`}
      to={`/tag/${nameUrl}/`}
    >
      {name}
    </Link>
  )
}

export default React.memo(Tag, (prevProps, nextProps) => {
  return prevProps.name === nextProps.name
})
