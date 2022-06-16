import React from 'react'
import PropTypes from 'prop-types'
import { useField } from 'formik'
import InputMask from 'react-input-mask'

import styles from './input.module.scss'

export const Input = ({ ...props }) => {
  const [field, meta] = useField(props)

  return (
    <div className={styles.group}>
      {props.mask ? (
        <InputMask mask={props.mask} {...field} {...props}>
          {inputProps => <input className={styles.input} {...inputProps} />}
        </InputMask>
      ) : (
        <input className={styles.input} {...field} {...props} />
      )}
      {meta.touched && meta.error ? (
        <div className={styles.error}>{meta.error}</div>
      ) : null}
    </div>
  )
}

Input.propTypes = {
  mask: PropTypes.string
}
