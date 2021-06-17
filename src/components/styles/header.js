import styled from 'styled-components/macro'

export const Header = styled.div`
    border-bottom: 1px solid #C0C4CC;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5em 0 .8em;
    margin: 0 0 2em;
`

export const Logo = styled.img`
    width: 8em;
    height: 2em;
    object-fit: cover;
    cursor: pointer;

    @media (max-width: 400px) {
        height: 1.5em;
        width: 6em;
    }
`

export const Form = styled.form`
    /* Frame 4 */


    /* Auto Layout */

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;

    width: 180px;
    height: 36px;

    @media (max-width: 400px) {
        width: 150px;
    }

    background: #FFFFFF;

    border: 1px solid #C0C4CC;
    box-sizing: border-box;
    border-radius: 2px;
`

export const SearchIcon = styled.input`

`

export const Search = styled.input`
    /* Search for a movie */


    position: static;
    width: 104px;
    height: 15px;
    left: 34px;
    top: 10px;

    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    /* identical to box height */

    display: flex;
    align-items: center;
    letter-spacing: -0.01em;

    color: #898E9A;

    border: none;
    margin-left: .7em;

    &:focus {
        outline: none;
    }
`
