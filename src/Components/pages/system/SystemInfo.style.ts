import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 30% 70%;
    background-color: #F2F2F2;
    padding-left: 5rem;
    padding-right: 5rem;
    padding-top: 5rem;
    padding-bottom: 5rem;
    font-family: 'Montserrat', sans-serif;

    ${(props) => props.theme.breakpoints.down('md')} {
        display: block;
        padding-left: 2rem;
        padding-right: 2rem;
    }
    
    
`

export const Info = styled.div`
    h1 {
        color: #FF5B2B;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        text-transform: uppercase;
        font-family: 'Alatsi', sans-serif;
    }

    p {
        text-align: justify;
    }
`

export const Boxes = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`

export const Box = styled.div`
    border: 3px solid #FF5B2B;
    box-sizing: border-box;
    width: 15rem;
    text-align: center;
    padding: 10px;
    margin-bottom: 1rem;
    transition: border 0.2s, box-shadow 1s;
    
    &:hover {
        border: 5px solid #FFB300;
        box-shadow: 5px 10px 16px #d2d2d2;
    }

    img {
        width: 6rem;
    }

    .platform, .analisis {
        width: 5rem;
        margin: 0.8rem;
    }

    h4 {
        color: #FF5B2B;
        margin-bottom: 1rem;
        font-weight: bold;
        font-family: 'Alatsi', sans-serif;
    }
`