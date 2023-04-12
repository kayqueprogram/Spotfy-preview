import React, { ReactNode } from 'react';
import { AlbumItem } from '../AlbumItem';
import { Container, Subtitle, Wrapper } from './styles';

type AlbumProps = {
    title: string
}

export function AlbumList({ title, ...props}: AlbumProps) {
    return (
        <Container>
            <Subtitle>{title}</Subtitle>
            <Wrapper>
                <AlbumItem />
                <AlbumItem />
                <AlbumItem />
                <AlbumItem />
                <AlbumItem />
                <AlbumItem />
            </Wrapper>
        </Container>
    )
}