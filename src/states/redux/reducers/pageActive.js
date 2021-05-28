import { type as pageActiveChangeType } from '../actions/pageActiveChange'

const defaulState = ''

const reducer = (state = defaulState, { type, payload }) => {
  switch (type) {
    case pageActiveChangeType:
      return payload
    default:
      return state
  }
}

export default reducer
