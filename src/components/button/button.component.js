import React from 'react'
import PropTypes from 'prop-types'

import styles from './button.module.scss'
import { BUTTON_SIZES, BUTTON_VARIANTS } from 'constants/button.constants'

export const Button = ({ variant, size, ...props }) => {
  return (
    <button
      className={[
        styles.button,
        styles[`button__${size}`],
        styles[`button__${variant}`]
      ].join(' ')}
      {...props}
    />
  )
}

Button.propTypes = {
  variant: PropTypes.oneOf(Object.values(BUTTON_VARIANTS)),
  size: PropTypes.oneOf(Object.values(BUTTON_SIZES))
}

Button.defaultProps = {
  variant: BUTTON_VARIANTS.CONTAINED,
  size: BUTTON_SIZES.MEDIUM
}
