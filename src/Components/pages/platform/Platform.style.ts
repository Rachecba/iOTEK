import styled from "styled-components";

export const Container = styled.div`
    padding-left: 5rem;
    padding-right: 5rem;
    padding-top: 5rem;
    padding-bottom: 5rem;
    text-align: center;
    font-family: 'Montserrat', sans-serif;

    ${(props) => props.theme.breakpoints.down('md')} {
        padding-left: 2rem;
        padding-right: 2rem;
    }

    .animation {
        -webkit-animation:zoom-in-out 1s linear 0s 1 normal;
        -moz-animation:zoom-in-out 1s linear 0s 1 normal;
        -ms-animation:zoom-in-out 1s linear 0s 1 normal;
        animation:zoom-in-out 1s linear 0s 1 normal;

        @-webkit-keyframes zoom-in-out {
            0%{ -webkit-transform: scale(1); transform: scale(1); }
            50%{ -webkit-transform: scale(1.2); transform: scale(1.2); }
            100%{ -webkit-transform: scale(1); transform: scale(1); }
        }
        
        @keyframes zoom-in-out {
            0%{ -ms-transform: scale(1); transform: scale(1); }
            50%{ -ms-transform: scale(1.2); transform: scale(1.2); }
            100%{ -ms-transform: scale(1); transform: scale(1); }
        }

    }
`

export const Title = styled.div`
    text-align: start;
    margin-bottom: 3rem;

    h1 {
        color: #FF5B2B;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        font-family: 'Alatsi', sans-serif;
    }
`

export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    ${(props) => props.theme.breakpoints.down('md')} {
        display: block;
    }
`

export const Card = styled.div`
    background: #FFFFFF;
    border-radius: 8px;
    margin-bottom: 2rem;
    padding: 2rem;
    width: 48%;
    box-shadow:  7px 7px 14px #b4b4b4,
             -7px -7px 14px #ffffff;

    ${(props) => props.theme.breakpoints.down('md')} {
        width: 100%;
    }

    .header-div {
        display: flex;
        align-items: center;

        ${(props) => props.theme.breakpoints.down('md')} {
            display: block;
        }
        
            img {
                width: 5rem;
                margin-left: 2rem;
                margin-right: 2rem;

                ${(props) => props.theme.breakpoints.down('md')} {
                   margin-bottom: 0.8rem;
                }
            }

            h4 {
                color: #FF5B2B;
                font-weight: bold;
                font-family: 'Alatsi', sans-serif;
            }
            

    }

    .text-div {
        margin-left: 2rem;
        margin-top: 2rem;
        text-align: justify;

        ${(props) => props.theme.breakpoints.down('md')} {
            margin-left: 0rem;
         }
    }

`