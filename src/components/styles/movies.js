import styled from 'styled-components/macro'

export const ResultsTitle = styled.div`
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    letter-spacing: -0.01em;

    color: #000000;

    margin-bottom: 1em;

    @media (max-width: 400px) {
        text-align: center;
    }
`

export const Grid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2.5em;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 800px) {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5em;
    }

    @media (max-width: 400px) {
        grid-template-columns: repeat(1, 1fr);
        width: 80%;
        margin-left: 10%;
    }
`

export const Movie = styled.div`
    cursor: pointer;
    position: relative;

    /* Navy / 0 */

    background: #FFFFFF;
    /* Navy / 400 */

    border: 1px solid #E1E3E6;
    box-sizing: border-box;
    box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    display: flex;
    flex-direction: column;

    width: 100%;
`

export const RatingContainer = styled.div`
    position: absolute;
    background: #FFFFFF;
    border: 1px solid #000000;
    border-radius: 50%;
    width: 3em;
    height: 3em;
    margin: 1.3em 1.3em 0;

    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
    /* identical to box height, or 167% */

    display: flex;
    flex-direction: column;
    justify-content: center;
    letter-spacing: -0.01em;

    color: #000000;
`

export const Rating = styled.div`
    margin: auto;
`

export const Poster = styled.div`
    background: url(${props => props.img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-size: 100%;
    width: 100%;
    height: 28em;
    border-radius: 8px 8px 0 0;

    @media (max-width: 1600px) {
        height: 24em;
    }

    @media (max-width: 1450px) {
        height: 22em;
    }

    @media (max-width: 1350px) {
        height: 20em;
    }

    @media (max-width: 1250px) {
        height: 18em;
    }

    @media (max-width: 1200px) {
        height: 24em;
    }

    @media (max-width: 1100px) {
        height: 22em;
    }

    @media (max-width: 1000px) {
        height: 20em;
    }

    @media (max-width: 900px) {
        height: 16em;
    }

    @media (max-width: 800px) {
        height: 26em;
    }

    @media (max-width: 700px) {
        height: 22em;
    }

    @media (max-width: 600px) {
        height: 18em;
    }

    @media (max-width: 500px) {
        height: 14em;
    }

    @media (max-width: 400px) {
        height: 24em;
    }

    @media (max-width: 350px) {
        height: 20em;
    }
`

export const Title = styled.div`

    /* Body 2 / Body 2 */

    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    /* or 162% */

    letter-spacing: -0.01em;

    color: #000000;
    padding:  .4em 0 .6em;
    margin: 0 .1em;
    text-align: center;
`

export const NoResults = styled.div`
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    letter-spacing: -0.01em;
    color: #898E9A;
`