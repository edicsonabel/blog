export const type = 'pageActiveChange'

const pageActiveChange = (page = '') => {
  return {
    type,
    payload: page,
  }
}

export default pageActiveChange
