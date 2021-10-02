export const makeApiUrl = (path) => {
  return `${process.env.REACT_APP_API}${path}`
}
