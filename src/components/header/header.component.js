import React from 'react'
import { Link } from 'react-router-dom'
import logoImg from 'assets/images/logo.svg'
import userImg from 'assets/images/user.svg'

import styles from './header.module.scss'

export const Header = () => {
  return (
    <>
      <div className={styles.blackBar}>
        <div className={styles.blackBar__inner}>
          <Link to="/">
            <img src={logoImg} width={58} height={58} alt="UOL Logo" />
          </Link>
        </div>
      </div>
      <header className={styles.header}>
        <div className={styles.header__inner}>
          <img src={userImg} width={28} height={28} alt="User Icon" />
          <h1>Painel de Clientes</h1>
        </div>
      </header>
    </>
  )
}
