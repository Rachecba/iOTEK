import styled from 'styled-components'

export const Container = styled.div`
    padding-left: 5rem;
    padding-right: 5rem;
    padding-top: 5rem;
    padding-bottom: 5rem;
    font-family: 'Montserrat', sans-serif;

    ${(props) => props.theme.breakpoints.down('md')} {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  `
  
export const FormContainer = styled.div`
  background: #F5F5F5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 8rem 5rem;
  width: 40rem;

  ${(props) => props.theme.breakpoints.down('md')} {
    padding: 2rem 1rem;
    width: 100%;
    margin-top: 3rem;
  }

  .form-group {
    margin-bottom: 2rem;
  }

  .btn {
    width: 100%;
    background: #FF5B2B;
    border: #FF5B2B; 
    font-family: 'Alatsi', sans-serif;

    &:hover {
      background: #C22C00;
      border: #C22C00; 
    }
  }
`

export const Title = styled.div`

    h1 {
        color: #FF5B2B;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        margin-bottom: 3rem;
        font-family: 'Alatsi', sans-serif;
    }
`

export const MessageSendContainer = styled.div`
  background-color: #222222;
  color: whitesmoke;
  width: 50%;
  height: 12rem;
  margin: auto;
  margin-top: 7rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`
export const ContactContainer = styled.div`
    display: flex;

    ${(props) => props.theme.breakpoints.down('md')} {
      display: block;
    }

    .phone-number {
        margin-right: 2rem;
    }
`
export const SecondContainer = styled.div`
    display: flex;
    justify-content: space-between;

    ${(props) => props.theme.breakpoints.down('md')} {
      display: block;
    }
`

export const TextContainer = styled.div`
    iframe {
      width: 100%;
      margin-top: 1rem;
    }
`