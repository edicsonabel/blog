import React from 'react'
import { Link } from 'gatsby'

/*    UTILS    */
import { slugify } from '../utils/utility'

const Tag = ({ name }) => {
  let nameUrl = slugify(name)

  return (
    <Link
      key={name}
      className={`body-2 tag tag--${nameUrl}`}
      to={`/tag/${nameUrl}/`}
    >
      {name}
    </Link>
  )
}

export default Tag
