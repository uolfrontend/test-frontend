import React from 'react'

import styles from './footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__credits}>
        React &copy; {new Date().getFullYear()}
      </div>
    </footer>
  )
}
