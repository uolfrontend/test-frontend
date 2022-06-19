import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/home.component'
import { NotFound } from './pages/not-found.component'
import { CustomerForm } from './pages/customer/customer-form.component'
import { ROUTES } from 'constants/routes.constants'

export const Routers = () => {
  return (
    <Routes>
      <Route path={ROUTES().HOME} element={<Home />} />
      <Route path={ROUTES().CUSTOMER_NEW} element={<CustomerForm />} />
      <Route
        path={ROUTES([':id']).CUSTOMER_EDIT}
        element={<CustomerForm edit={true} />}
      />
      <Route path={ROUTES().OTHER_ROUTES} element={<NotFound />} />
    </Routes>
  )
}
