import styled from 'styled-components'

export const NavBar = styled.div`

  z-index: 100;
  
  background: linear-gradient(271deg, #FF5B2B 0%, #CD2E00 100%);

  font-family: 'Alatsi', sans-serif;

  position: fixed;
  top: 0;
  width: 100%;
  transition: all ease 1s;

  .dropdown-item {
    text-transform: capitalize;
  }

  img {
    width: 10rem;
    padding: 1rem;
    margin-left: 5rem;

    ${(props) => props.theme.breakpoints.down('md')} {
      margin-right: 0;
    }
  }

  .active {
    background-color: white;
    height: 67px;
    transition: all ease 1s;

    .dropdown {
      &:hover {
        border-bottom: 5px solid #FF5B2B;
      }
    }

    ${(props) => props.theme.breakpoints.down('md')} {
      img {
        padding-top: 0rem;
        padding-bottom: 0rem;
      }

      .navbar-brand {
        padding-bottom: 0rem !important;
      }

      .dropdown {
        background-color: white;
      }

    }
  }

  .navbar-expand-md .navbar-collapse {
    justify-content: end !important;
    margin-right: 7rem;
  }

  .nav-item {
    margin-right: 2rem;
    text-transform: uppercase;
    line-height: 2;

    ${(props) => props.theme.breakpoints.down('md')} {
      margin-right: 0;
    }

    &:hover {
      border-bottom: 5px solid #000;
    }

  }

  .nav-link {
    color: black !important;

    ${(props) => props.theme.breakpoints.down('md')} {
      margin-left: 0.5rem;
    }
  }
  }

  .dropdown-menu.show {
    animation: myAnim 1s ease 0s 1 normal forwards;

    @keyframes myAnim {
      0% {
        opacity: 0;
        transform: rotateX(-100deg);
        transform-origin: top;
      }
    
      100% {
        opacity: 1;
        transform: rotateX(0deg);
        transform-origin: top;
      }
    }

    border: none;
    background-color: rgba(0, 0, 0, 0.54);

    .dropdown-item {
      color: white !important;
      
      &:hover {
        animation: dropdownButton 4s ease 0s 1 normal forwards;

        @keyframes dropdownButton {
          0%,
          100% {
            transform: translateX(0);
          }
        
          10%,
          30%,
          50%,
          70% {
            transform: translateX(-10px);
          }
        
          20%,
          40%,
          60% {
            transform: translateX(10px);
          }
        
          80% {
            transform: translateX(8px);
          }
        
          90% {
            transform: translateX(-8px);
          }
        }

        background-color: inherit;
      }
    }
  }

  .navbar-expand-md .navbar-collapse {
    margin-right: 0;
  }
`