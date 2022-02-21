export const dateFormat = dateString => {
  const date = new Date(dateString)
  const ye = new Intl.DateTimeFormat('es', { year: 'numeric' }).format(date)
  let mo = new Intl.DateTimeFormat('es', { month: 'short' }).format(date)
  mo = mo.charAt(0).toUpperCase() + mo.slice(1)
  // mo = mo.toUpperCase()
  const da = new Intl.DateTimeFormat('es', { day: '2-digit' }).format(date)
  return `${mo} ${da}, ${ye}`
  // return `${da}/${mo}/${ye}`
  // return `${da} ${mo} ${ye}`
}
