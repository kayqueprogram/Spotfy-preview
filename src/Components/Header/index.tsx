import React, { ReactNode } from 'react';
import { Container, Image } from './styles';
import Logo from '../../assets/images/spotifyLogo.svg';



export function Header() {
    return (
        <Container>
            <Image src={Logo} alt="" />
        </Container>
    )
}