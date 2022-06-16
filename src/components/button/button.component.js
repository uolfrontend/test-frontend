import React from 'react'
import PropTypes from 'prop-types'

import styles from './button.module.scss'

export const Button = ({ isOutlined, isButtonSmall, ...props }) => {
  return (
    <button
      className={`${styles.button} ${
        isButtonSmall ? styles.button__small : ''
      } ${isOutlined ? styles.outlined : ''}`}
      {...props}
    />
  )
}

Button.propTypes = {
  isOutlined: PropTypes.bool,
  isButtonSmall: PropTypes.bool
}

Button.defaultProps = {
  isOutlined: false,
  isButtonSmall: false
}
