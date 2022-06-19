import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'components/button'

import styles from 'styles/pages/not-found.module.scss'
import { ROUTES } from 'constants/routes.constants'

export const NotFound = () => {
  const navigate = useNavigate()

  const redirectToHome = () => navigate(ROUTES().HOME, { replace: true })

  return (
    <div className={styles.notFound}>
      <div>404 página não encontrada...</div>
      <Button onClick={redirectToHome}>Início</Button>
    </div>
  )
}
