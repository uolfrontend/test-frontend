import React from 'react'

import { HeaderContainer, Logo } from './style'
import LogoUOL from '../../assets/logo/logo.png'

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={LogoUOL} />
    </HeaderContainer>
  )
}

export default Header
