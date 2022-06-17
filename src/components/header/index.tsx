import React from 'react';
import { IconImg, HeaderContainer } from './style'

const Header = () => {
    return (
        <HeaderContainer data-testid="header">
            <IconImg src="http://localhost:3000/src/img/uol-white.png" alt="icon uol" />
        </HeaderContainer>
    );
};

export default Header;
