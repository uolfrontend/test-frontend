import React from 'react'
import { CustomerList } from 'components/customer-list'
import { useCustomers } from 'hooks/use-customers.hooks'
import { Headline } from 'components/headline'
import { Loader } from 'components/loader'

import styles from 'styles/pages/home.module.scss'

export const Home = () => {
  const { loading } = useCustomers()

  return (
    <div className={styles.home}>
      <Headline
        title="Listagem de usuários"
        description="Escolha um cliente para visualizar"
        hasButton={!loading}
      />
      {loading ? <Loader /> : <CustomerList />}
    </div>
  )
}
