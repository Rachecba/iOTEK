import styled from 'styled-components'

export const Footer = styled.div`
  background-color: #222222 !important;
  color: white;
  padding: 3.5rem;
  font-size: 1rem;
  line-height: 24px;
  font-family: 'Montserrat', sans-serif;

  h6 {
    color: white;
    font-size: 16px;
    text-transform: uppercase;
    margin-top: 5px;
    letter-spacing: 2px;
    font-family: 'Alatsi', sans-serif;
  }

  a, li {
    color: white;
  }

  a {
    &:hover {
      color: #FF5B2B;
      text-decoration: none;
    }
  }

  span{
    font-size: 15px;
    line-height: 24px;
    color: white;
  }
`
export const Links = styled.div`
  padding-left: 0;
  list-style: none;

  li {
    display: block;
  }

  a {
    color: white;
    text-decoration: none;

    &:active, &:focus, &:hover {
      color: #FF5B2B;
      text-decoration: none;
    }
  }

  .inline li {
    display: inline-block;
  }

  ul {
    padding-left: 0;
  }
`

export const Info = styled.div`
  div {
    margin-bottom: 1rem;
  }

`

export const Copyright = styled.div`
  margin: 0;
  color: #737373;

  .heart {
    color: #df0000;
  }
`

export const Divide = styled.div`
  width: 100%;
  border-bottom: 1px solid #bbb;
  margin-bottom: 40px;
  opacity: 0.5;
  margin-top: 20px;
  margin-left: 1rem;
`
