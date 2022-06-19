import React from 'react'
import PropTypes from 'prop-types'

import { Header } from 'components/header'
import { Footer } from 'components/footer'

import styles from './layout.module.scss'

export const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.layout__main}>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}
