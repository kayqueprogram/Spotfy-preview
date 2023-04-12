import React, { ReactNode } from 'react';
import { Container, Title, Description, Image } from './styles';


export function AlbumItem() {
    return (
        <Container>
            <Image src="https://via.placeholder.com/160/170/#ccc" />
            <Title>Nome do álbum</Title>
            <Description> Nome do artista</Description>
        </Container>
    )
}