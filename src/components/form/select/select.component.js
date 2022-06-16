import PropTypes from 'prop-types'
import React from 'react'
import { useField } from 'formik'

import styles from './select.module.scss'

export const Select = ({ options, disableOption, ...props }) => {
  const [field, meta] = useField(props.name)

  return (
    <div className={styles.group}>
      <select className={styles.select} {...field} {...props}>
        {options.map(({ value, label }, i) => {
          return (
            <option key={i} value={value} disabled={value === disableOption}>
              {label}
            </option>
          )
        })}
      </select>
      {meta.touched && meta.error ? (
        <div className={styles.error}>{meta.error}</div>
      ) : null}
    </div>
  )
}

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  disableOption: PropTypes.string,
  name: PropTypes.string.isRequired
}
Select.defaultProps = {
  disableOption: ''
}
