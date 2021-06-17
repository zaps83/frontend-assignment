import styled from 'styled-components/macro'

export const Container = styled.div`
    width: 80%;
    margin-left: 10%;
    margin-bottom: 2em;

    @media (max-width: 800px) {
        width: 90%;
        margin-left: 5%;
    }

    @media (max-width: 400px) {
        width: 100%;
        margin-left: 0;
    }
`


