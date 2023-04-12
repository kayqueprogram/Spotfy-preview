import React, { ReactNode } from 'react';
import { Container, Label, Input } from './styles';


type SearchBarProps = {
    handleSetTerm: (props: string) => void,
    searchTerm: string | undefined;

}

export function SearchBar({ handleSetTerm, searchTerm }: SearchBarProps) {
    return (
        <Container>
            <Label htmlFor="">
                Busque por artistas, álbuns ou músicas
            </Label>
            <Input
                value={searchTerm}
                onChange={(e) => handleSetTerm(e.target.value)}
                placeholder=" Comece a escrever..."
            />
        </Container>
    )
}