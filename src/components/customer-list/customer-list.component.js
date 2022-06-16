import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'components/button'
import { useCustomers } from 'hooks/use-customers.hooks'
import { STATUS_LABEL } from 'constants/status.constants'

import styles from './customer-list.module.scss'
import { ROUTES } from 'constants/routes.constants'

export const CustomerList = () => {
  const { customersState } = useCustomers()
  const navigate = useNavigate()

  const users = customersState || []

  return (
    <>
      <div className={styles.customer}>
        {users.length ? (
          users.map((user, i) => (
            <div className={styles.customer__item} key={i}>
              <span>
                <strong>{user.name}</strong>
                <p>{user.email}</p>
              </span>
              <span>
                <strong>{user.id}</strong>
                <p>{user.phone}</p>
              </span>
              <span>
                <span
                  className={`${styles.customer__item__sticon} ${
                    styles[`customer__item__sticon--${user.status}`]
                  }`}
                />
                {STATUS_LABEL[user.status]}
              </span>
              <span>
                <Button
                  type="button"
                  isOutlined={true}
                  onClick={() => navigate(ROUTES([user.id]).CUSTOMER_EDIT)}
                >
                  Editar
                </Button>
              </span>
            </div>
          ))
        ) : (
          <div className={styles.customer}>
            <span className={styles.customer__nodata}>
              Não há usuários cadastrados.
            </span>
          </div>
        )}
      </div>
      <div className={styles.customer__count}>
        <span>Exibindo {users.length} clientes</span>
      </div>
    </>
  )
}
