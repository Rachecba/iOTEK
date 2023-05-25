

import styled from "styled-components";

export const CatalogContainer = styled.div`
    h1 {
        display: flex;
        margin: 3rem 0;
        justify-content: center;
    }
`

export const CardsContainer = styled.div`
    margin: 2rem 3rem;
`

export const Categories = styled.div`
   
    ul {
        display: flex;
        justify-content: center;
        list-style-type: none;
        flex-flow: wrap;
        ${(props) => props.theme.breakpoints.down('md')} {
            flex-direction: column;

            li{
                margin: auto;
            }
        }
    }

    button {
        display: inline-block;
        padding: 8px 16px;
        margin: 0 0.5rem;
        margin-bottom: 1rem;
        background-color: #FF5B2B;
        border: none;
        border-radius: 4px;
        font-size: 14px;
        color: #fff;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: #059adb;
        }

        &.active {
            background-color: #059adb;
        }
    }
`