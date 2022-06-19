export const ROUTES = (params = []) => {
  const routeParams = params ? params.join('') : ''
  return {
    HOME: '/',
    CUSTOMER_NEW: '/customer/new',
    CUSTOMER_EDIT: `/customer/edit/${routeParams}`,
    OTHER_ROUTES: '*',
    NOT_FOUND: '/404'
  }
}
