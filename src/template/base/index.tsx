import React, { ReactNode } from 'react';
import { Container } from './styles'

type Reactprops = {
    children: ReactNode
}

export function Base({ children }: Reactprops) {
    return (
        <Container>
            {children}
        </Container>
    )
}