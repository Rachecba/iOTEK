import styled from "styled-components";


export const CardContainer = styled.div`
    background: #FFFFFF;
    border-radius: 8px;
    margin: auto;
    margin-bottom: 5rem;
    padding: 1.5rem;
    width: 25rem;
    height: 40rem;
    box-shadow: 7px 7px 14px #b4b4b4, -7px -7px 14px #ffffff;

    img {
        display: flex;
        margin: auto;
        width: 100%;
        height: 18rem;
        object-fit: contain;
    }

    section {
        margin-top: 1rem;
    }

    h4{
        margin: 0;
        font-size: 1.2rem;
    }

    span{
        color: #b4b4b4;
    }

    .title{
        height: 6rem;
    }

    p{
        margin-top: 1rem;
        height: 8rem;
        overflow: auto;

        &::-webkit-scrollbar {
            width: 8px;
        }

        &::-webkit-scrollbar-track {
            background-color: #f1f1f1;
        }

        &::-webkit-scrollbar-thumb {
            background-color: #888;
            border-radius: 4px;
        }

        &::-webkit-scrollbar-thumb:hover {
            background-color: #555;
        }
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