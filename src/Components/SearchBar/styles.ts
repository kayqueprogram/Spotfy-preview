import styled  from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px var(--paddingMain)

`

export const Label = styled.label`
    font-size: var(--fontMedium);
    color: var(--terceary);
`

export const Input = styled.input`
    font-size: var(--fontXLarge);
    font-weight: bold;
    color: var(--secondary);
    height: 80px;
    padding-bottom: 12px;
    line-height: var(--fontXLarge);
    border: 0;
    border-bottom: 2px solid var(--secondary);
    background-color: transparent;
    color: var(--white);
    outline: 0;
    padding-left: 10px;
`
