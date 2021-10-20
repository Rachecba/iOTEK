import styled from 'styled-components'

export const ContainerWrap = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const BodyContainer = styled.div`
    display: grid;
    grid-template-columns: 1.3fr 10fr 1.3fr;
    grid-template-areas: "left body right";

    ${(props) => props.theme.breakpoints.down('lg')} {
        grid-template-columns: 12fr;
   }

`
export const LeftContainer = styled.div`
    background-image: url("/assets/images/background-left.png");
    grid-area: left;
    background-repeat: no-repeat, repeat;

    ${(props) => props.theme.breakpoints.down('lg')} {
        background-image: none;
   }
`

export const RightContainer = styled.div`
    background-image: url("/assets/images/background-right.png");
    grid-area: right;
    background-repeat: no-repeat, repeat;
    ${(props) => props.theme.breakpoints.down('lg')} {
        background-image: none;
   }
`

export const MainContainer = styled.div`
    grid-area: body;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    
`