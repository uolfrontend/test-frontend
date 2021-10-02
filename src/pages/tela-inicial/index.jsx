import React, { useState, useEffect, useContext } from 'react'
import { StoreContext } from '../../context/store'
import { useHistory } from 'react-router-dom'
import Dividir from '../../components/dividir'
import Status from '../../components/status'
import UserIcon from '../../assets/logo/user_img.PNG'
import {
  Container,
  GridContainerMain,
  GridContainer,
  GridItem,
  TitleContainer,
  InfoContainer,
  H2Div,
  H3Div,
  UserIconSt,
  BtEditPage,
  Dot,
  Bold,
  UserValues,
} from './style'

function TelaInicial({ loadAllCustomers }) {
  const { data, editCustomer, newCustomer } = useContext(StoreContext)
  const history = useHistory()
  const { loading } = data
  const [customers, setCustomers] = useState([])

  const handleLoadingAllCustomers = () => {
    loadAllCustomers.loadAll().then((data) => {
      if (data && data.customers) {
        setCustomers(data.customers)
      }
    })
  }

  useEffect(() => {
    if (!loading) return
    handleLoadingAllCustomers()
  }, [loading])

  useEffect(() => {
    handleLoadingAllCustomers()
  }, [])

  const handleNewCustomer = () => {
    newCustomer()
    history.push('/edit')
  }

  const handleEditCustomer = (customer) => {
    editCustomer(customer)
    history.push('/edit')
  }

  return (
    <Container>
      <TitleContainer>
        <UserIconSt src={UserIcon} /> <h1>Painel de Clientes</h1>
      </TitleContainer>
      <Dividir />
      <InfoContainer>
        <div>
          <H2Div>Listagem de Usuarios</H2Div>
          <H3Div>Escolha um cliente para visualizar os detalhes</H3Div>
        </div>
        <BtEditPage onClick={handleNewCustomer} novo>
          Novo Cliente
        </BtEditPage>
      </InfoContainer>
      <GridContainerMain>
        {customers.map((customer) => {
          const { id, name, email, phone, status } = customer
          return (
            <GridContainer key={id}>
              <GridItem>
                <Bold>{name}</Bold>
                <UserValues>{email}</UserValues>
              </GridItem>
              <GridItem>
                <Bold>{id}</Bold>
                <UserValues>{phone}</UserValues>
              </GridItem>
              <GridItem>
                <UserValues>
                <Dot tipo={status}></Dot>
                <Status tipoStatus = {status}/>
                </UserValues>
              </GridItem>
              <GridItem>
                <BtEditPage
                  onClick={() => handleEditCustomer(customer)}
                  novo={false}
                >
                  Editar
                </BtEditPage>
              </GridItem>
            </GridContainer>
          )
        })}
      </GridContainerMain>
      <H3Div>Exibindo {customers.length} clientes</H3Div>
    </Container>
  )
}

export default TelaInicial
