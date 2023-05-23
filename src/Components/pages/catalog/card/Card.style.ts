import styled from "styled-components";


export const CardContainer = styled.div`
    background: #FFFFFF;
    border-radius: 8px;
    margin: auto;
    margin-bottom: 5rem;
    padding: 1.5rem;
    width: 25rem;
    box-shadow: 7px 7px 14px #b4b4b4, -7px -7px 14px #ffffff;

    img {
        display: flex;
        margin: auto;
    }

    section {
        margin-top: 1rem;
    }

    h4{
        margin: 0;
    }

    span{
        color: #b4b4b4;
    }

    p{
        margin-top: 1rem;
    }

    button {
        display: flex;
        margin: auto;
        background-color: #FF5B2B;
        width: 100%;

        span {
            color: #FFFFFF;
        }
    }

    button:hover{
        background-color: #CD2E00;
    }
`