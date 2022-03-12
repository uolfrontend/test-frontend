import type { NextPage } from 'next'
import { useState } from 'react'
import { HeaderListUser } from '../components/HeaderListUser'
import { ListUser } from '../components/ListUser'
import { customersDB } from '../data/customers'

const Home: NextPage = () => {
  const [data] = useState(customersDB)
  return (
    <>
      <HeaderListUser
        title='Listagem de usuários'
        subTitle='Escolha um cliente para visualizar os detalhes'
        buttonNewUser={true} />
      <ListUser data={customersDB} />
    </>
  )
}

export default Home
