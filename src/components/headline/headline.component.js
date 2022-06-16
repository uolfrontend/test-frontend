import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { Button } from 'components/button'

import styles from './headline.module.scss'
import { ROUTES } from 'constants/routes.constants'

export const Headline = ({ title, description, hasButton }) => {
  const navigate = useNavigate()

  return (
    <>
      <div className={styles.headline}>
        <nav className={styles.headline__nav}>
          <span>
            <h1>{title}</h1>
            <p>{description}</p>
          </span>
          {hasButton && (
            <Button
              isButtonSmall={true}
              onClick={() => navigate(ROUTES().CUSTOMER_NEW)}
            >
              Novo cliente
            </Button>
          )}
        </nav>
      </div>
    </>
  )
}

Headline.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  hasButton: PropTypes.bool
}
