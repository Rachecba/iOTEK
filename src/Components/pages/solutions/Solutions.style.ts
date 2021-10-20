import styled from "styled-components";

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

    #animation {
        -webkit-animation:flipiny 1s ease 0s 1 normal;
        -moz-animation:flipiny 1s ease 0s 1 normal;
        -ms-animation:flipiny 1s ease 0s 1 normal;
        animation:flipiny 1s ease 0s 1 normal;
    
        @-webkit-keyframes flipiny {
            0%{ opacity: 0; -webkit-transform: perspective(400px) rotateY(0deg); transform: perspective(400px) rotateY(90deg); }
            40%{ -webkit-transform: perspective(400px) rotateY(0deg); transform: perspective(400px) rotateY(-10deg); }
            70%{ -webkit-transform: perspective(400px) rotateY(0deg); transform: perspective(400px) rotateY(10deg); }
            100%{ opacity: 1; -webkit-transform: perspective(400px) rotateY(0deg); transform: perspective(400px) rotateY(0deg); }
        }
        
        @keyframes flipiny {
            0%{ opacity: 0; transform: perspective(400px) rotateY(90deg); }
            40%{ transform: perspective(400px) rotateY(-10deg); }
            70%{ transform: perspective(400px) rotateY(10deg); }
            100%{ opacity: 1; transform: perspective(400px) rotateY(0deg); }
        }
    }

    .card {
        position: relative;
        width: 300px;
        height: 400px;
        margin: 0 auto;
        background: linear-gradient(145deg, #dbdbdb, #ffffff);
        box-shadow:  11px 11px 13px #c3c3c3,
                 -11px -11px 13px #ffffff;
        color: black;
        border-radius: 8px 50px;
        margin-bottom: 3rem;
  
        .face {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
  
          &.face1 {
            box-sizing: border-box;
            padding: 20px;

            .icon {
                text-align: center;
                
                img {
                    width: 4rem;
                    margin-bottom: 1rem;
                }
            }
  
            h2 {
              margin-bottom: 1rem;
              padding: 0;
            }
          }
  
          &.face2 {
            transition: 0.5s;
            background-color: #3e3e3e;
            border-radius: 6px 48px;
  
            h2 {
              margin: 0;
              padding: 0;
              font-size: 2em;
              color: #fff;
              transition: 0.5s;
              text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
              z-index: 10;
            }
          }
        }
      }

    .card:hover .face.face2, .card:active .face.face2 {
        height: 60px;
  
        h2 {
          font-size: 1.5em;
        }
    }

      #restaurants {
          background-image: url('assets/images/restaurant.jpg');
          background-size: cover;
      }

      #food {
        background-image: url('assets/images/production.jpg');
        background-size: cover;
      }

      #hospitality {
        background-image: url('assets/images/temperature-control.jpg');
        background-size: cover;

      }

      #drug {
        background-image: url('assets/images/vaccine.jpg');
        background-size: cover;
      }

      #hospital {
        background-image: url('assets/images/surgery.jpg');
        background-size: cover;
      }

      #labs {
        background-image: url('assets/images/labs.jpg');
        background-size: cover;
      }

      #market {
        background-image: url('assets/images/market.jpg');
        background-size: cover;
      }

      #store {
        background-image: url('assets/images/store.jpg');
        background-size: cover;
      }


    .transparent-background {
        background-color: rgba(50, 50, 50, 0.7);
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 6px 48px;
        text-align: center;
    }

`

export const Title = styled.div`
    text-align: center;

    h1 {
        color: #FF5B2B;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        text-transform: uppercase;
        margin-bottom: 1rem;
        font-family: 'Alatsi', sans-serif;
    }
`

export const SolutionTitle = styled.div`
    margin-left: 5rem;
    margin-top: 3rem;
    margin-bottom: 2rem;
    width: auto;
    color: #FF5B2B;
    font-family: 'Alatsi', sans-serif;
    text-transform: uppercase;

    ${(props) => props.theme.breakpoints.down('md')} {
        margin-left: 1rem;
    }
`

export const Boxes = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`


