import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Form, Formik } from 'formik'
import { Button } from 'components/button'
import { Input, Select } from 'components/form'
import { CUSTOMER_STATUS, STATUS } from 'constants/status.constants'
import { validationSchema } from 'utils/validation.schema'
import { useCustomers } from 'hooks/use-customers.hooks'
import { Headline } from 'components/headline'

import styles from 'styles/pages/customer/customer-form.module.scss'
import { CUSTOMERS_FIELDS } from 'constants/customers.constants'
import { Loader } from 'components/loader'
import { ROUTES } from 'constants/routes.constants'
import { BUTTON_VARIANTS } from 'constants/button.constants'

export const CustomerForm = ({ edit }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { customersState, addCustomer, getCustomer, updateCustomer, loading } =
    useCustomers()

  const customer = id ? getCustomer(id) : CUSTOMERS_FIELDS

  const onSubmit = values => {
    if (edit) {
      updateCustomer(id, values)
    } else {
      addCustomer(values)
    }
    navigate(ROUTES().HOME)
  }

  useEffect(() => {
    if (edit && !customer && Array.isArray(customersState)) {
      navigate(ROUTES().NOT_FOUND, { replace: true })
    }
  }, [edit, customer, customersState])

  if (loading) {
    return <Loader />
  }

  return (
    <>
      <Headline
        title={edit ? 'Editar usuário' : 'Novo usuário'}
        description={`Informe os campos a seguir para ${
          edit ? 'editar' : 'criar'
        } usuário`}
      />
      <div className={styles.customer}>
        <div className={styles.customer__form}>
          <Formik
            initialValues={customer}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {formProps => (
              <Form>
                <Input type="text" name="name" placeholder="Nome" />
                <Input type="text" name="email" placeholder="E-mail" />
                <Input
                  type="text"
                  name="id"
                  mask="999.999.999-99"
                  placeholder="CPF"
                />
                <Input
                  mask="(99) 99999-9999"
                  type="text"
                  name="phone"
                  placeholder="Telefone"
                />
                <Select
                  name="status"
                  disableOption={STATUS.DEFAULT}
                  options={CUSTOMER_STATUS}
                />

                <div className={styles.button__group}>
                  <Button type="submit" disabled={!formProps.dirty}>
                    {edit ? 'Atualizar' : 'Criar'}
                  </Button>
                  <Button
                    type="button"
                    variant={BUTTON_VARIANTS.OUTLINED}
                    onClick={() => navigate(ROUTES().HOME)}
                  >
                    Voltar
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  )
}

CustomerForm.propTypes = {
  edit: PropTypes.bool
}

CustomerForm.defaultProps = {
  edit: false
}
