import styled from 'styled-components/macro'

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    margin: 0;
    cursor: pointer;
`

export const Body = styled.div`
    background: #fff;
    position: relative;
    width: 523px;
    height: 444px;
    padding: 15px 30px;
    margin: auto;
    height: auto;
    cursor: auto;
    
    @media (max-width: 800px) {
        width: 310px;
    }

    @media (max-width: 400px) {
        width: 210px;
    }
`

export const TopContainer = styled.div`
    margin-bottom: .7em;
    display: flex;
    justify-content: space-between;
    position: relative;

    @media (max-width: 400px) {
        margin-bottom: .2em;
    }
`

export const Title = styled.div`
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.01em;
`

export const CloseButtonContainer = styled.div`
    position: relative;
`

export const CloseButton = styled.div`
    
    width: 22px;
    height: 22px;
    border: solid .1em black;
    cursor: pointer;
    &:hover {
        opacity: 1;
    }
    &:before,
    &:after {
        position: absolute;
        left: .75em;
        top: .15em;
        content: ' ';
        height: 20px;
        width: 1px;
        background-color: #000;
    }
    &:before {
        transform: rotate(45deg);
    }
    &:after {
        transform: rotate(-45deg);
    }
`

export const BottomContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: .8em;

    @media (max-width: 800px) {
        align-items: center;
    }

    @media (max-width: 400px) {
        flex-direction: column;
    }
`

export const Poster = styled.div`
    background: url(${props => props.img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-size: 100%;
    width: 266px;
    height: 389px;

    @media (max-width: 800px) {
        width: 166px;
        height: 289px;
    }

    @media (max-width: 400px) {
        width: 140px;
        height: 220px
    }
`

export const BottomRightContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 241px;
    margin-left: 20px;

    @media (max-width: 400px) {
        margin-right: 20px;
    }
`

export const ReleaseDate = styled.div`
    font-family: Inter;
    font-style: normal;
    font-size: 14px;
    line-height: 24px;
    /* or 171% */

    letter-spacing: -0.01em;

    color: #000000;
    margin-bottom: 1em;
`

export const Description = styled.div`
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.01em;

    color: #000000;

    margin-bottom: 1em;
`

export const Rating = styled.div`
    font-family: Inter;
    font-style: normal;
    font-size: 14px;
    line-height: 24px;
    /* or 171% */

    display: flex;
    align-items: center;
    letter-spacing: -0.01em;

    color: #000000;
`