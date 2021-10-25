import styled from "styled-components";

export const Container = styled.div`
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    background-image: url('https://raw.githubusercontent.com/Rachecba/iOTEK/main/public/assets/images/mother-board.jpeg');
    background-size: cover;

    .animation {
        -webkit-animation:bounce-in 1s ease 0s 1 normal;
        -moz-animation:bounce-in 1s ease 0s 1 normal;
        -ms-animation:bounce-in 1s ease 0s 1 normal;
        animation:bounce-in 1s ease 0s 1 normal;
    

        @-webkit-keyframes bounce-in {
            0%{ opacity: 0; -webkit-transform: scale(.3); transform: scale(.3); }
            50%{ opacity: 1; -webkit-transform: scale(1.0); transform: scale(1.0); }
            70%{ -webkit-transform: scale(0.9); transform: scale(0.9); }
            100%{ -webkit-transform: scale(1); transform: scale(1); }
        }
        
        @keyframes bounce-in {
            0%{ opacity: 0; transform: scale(.3); }
            50%{ opacity: 1; transform: scale(1.0); }
            70%{ transform: scale(0.9); }
            100%{ transform: scale(1); }
        }
    }
`

export const Layer = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(183, 65, 29, 0.7);
    top: 0;
    left: 0;
    padding-left: 5rem;
    padding-right: 5rem;
    padding-top: 5rem;
    padding-bottom: 5rem;
    text-align: center;


    ${(props) => props.theme.breakpoints.down('md')} {
        padding-left: 2rem;
        padding-right: 2rem;
    }

`

export const Title = styled.div`
    text-align: center;

    h1 {
        color: white;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        margin-bottom: 3rem;
        font-family: 'Alatsi', sans-serif;
    }
`

export const CardsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`

export const Card = styled.div`
    border-radius: 20px;
    margin-bottom: 3rem;
    margin-right: 5rem;
    padding: 2rem;
    display: block;
    width: 30rem;
    background: linear-gradient(145deg, #ffffff, #dbdbdb);
    box-shadow:  6px 6px 12px rgba(0, 0, 0, 0.5);

    ${(props) => props.theme.breakpoints.down('md')} {
        display: block;
        margin-right: 0rem;
    }

    
    .image-div {

            img {
                width: 5rem;

                ${(props) => props.theme.breakpoints.down('md')} {
                    margin-bottom: 1rem;
                 }
            }

    }

    .text-div {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1rem;

        ${(props) => props.theme.breakpoints.down('md')} {
            justify-content: center;
         }
    }

`