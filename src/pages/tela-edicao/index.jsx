import React, { useState, useEffect, useContext } from 'react'
import { StoreContext } from '../../context/store'
import { useHistory } from 'react-router-dom'
import Dividir from '../../components/dividir'
import Info from '../../components/info'
import UserIcon from '../../assets/logo/user_img.PNG'
import {
  Container,
  TitleContainer,
  InfoContainer,
  GridContainerMain,
  GridItem,
  GridButton,
  SelectBox,
  ButtonCriar,
  ButtonVoltar,
  UserIconSt,
} from './style'
import Input from '../../components/input'

function TelaEdicao({ handleCustomers, formatter, validator }) {
  const { data, resetData } =
    useContext(StoreContext)
  const history = useHistory()
  const { isNewCustomer, customer } = data

  const initialValue = {
    name: '',
    email: '',
    id: '',
    phone: '',
    status: '',
  }

  const initialErrors = {
    id: null,
    phone: null,
    email: null,
  }

  const [formIsInvalid, setFormIsInvalid] = useState(true)

  const [form, setForm] = useState({
    ...initialValue,
    ...customer,
  })

  const [errors, setErrors] = useState({
    ...initialErrors,
  })

  useEffect(() => {
    validate('phone')
    format('phone')
  }, [form.phone])

  useEffect(() => {
    validate('email')
  }, [form.email])

  useEffect(() => {
    validate('id')
    format('id')
  }, [form.id])

  const handleBackHome = () => {
    resetData()
    history.push('/')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (formIsInvalid) {
      return
    }

    if (isNewCustomer) {
      await handleCustomers.insert(form)
    } else {
      await handleCustomers.set(customer.index, form)
    }
    handleBackHome()
  }

  const onChange = (event) => {
    const value = event.target.value
    const name = event.target.name
    setFormValue(name, value)
  }

  const validate = (field) => {
    if (!form[field]) return
    const error = validator.validate(field, form[field])
    if ((!error && errors[field]) || error) setFormError(field, error)
    setFormIsInvalid(!!error)
  }

  const format = (field) => {
    if (!form[field]) return
    setFormValue(field, formatter.format(field, form[field]))
  }

  const setFormValue = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const setFormError = (field, message) => {
    setErrors((prev) => ({ ...prev, [field]: message }))
  }

  return (
    <Container>
      <TitleContainer>
        <UserIconSt src={UserIcon} /> <h1>Painel de Clientes</h1>
      </TitleContainer>
      <Dividir />
      <InfoContainer>
        <Info isEdit={!isNewCustomer} />
      </InfoContainer>
      <form onSubmit={handleSubmit}>
        <GridContainerMain>
          <GridItem>
            <Input
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Nome"
            />
          </GridItem>
          <GridItem>
            <Input
              name="email"
              value={form.email}
              onChange={onChange}
              placeholder="E-mail"
              error={errors.email}
            />
          </GridItem>
          <GridItem>
            <Input
              name="id"
              value={form.id}
              onChange={onChange}
              placeholder="CPF"
              error={errors.id}
            />
          </GridItem>
          <GridItem>
            <Input
              name="phone"
              value={form.phone}
              onChange={onChange}
              placeholder="Telefone"
              error={errors.phone}
            />
          </GridItem>
          <GridItem>
            <SelectBox
              value={form.status}
              onChange={onChange}
              name="status"
              placeholder="Status"
            >
              <option selected>Status</option>
              <option value="waiting">Aguardarndo ativação</option>
              <option value="active">Ativo</option>
              <option value="disabled">Desativado</option>
              <option value="inactive">Inativo</option>
            </SelectBox>
          </GridItem>
          <GridItem></GridItem>
          <GridButton>
            <ButtonCriar type="submit" tipo="voltar">
              {isNewCustomer ? 'Criar' : 'Editar'}
            </ButtonCriar>
          </GridButton>
          <GridButton>
            <ButtonVoltar onClick={handleBackHome}>Voltar</ButtonVoltar>
          </GridButton>
        </GridContainerMain>
      </form>
    </Container>
  )
}

export default TelaEdicao
