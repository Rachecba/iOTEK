import styled from 'styled-components'

export const Container = styled.div`
  display: block;
  text-align: center;

  .carousel-item {
    float: none !important;
  }

  .slider-container {
    background: white !important;
  }
  .full-width {
    width: 100%;
  }

  h1 {
    color: #ff5b2b;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-transform: uppercase;
    margin-bottom: 1rem;
    font-family: 'Alatsi', sans-serif;
  }

  p {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem;
    margin-bottom: 3rem;
  }

  .awssld__content {
    background-color: white !important;
    .awssld__content > img,
    .awssld__content > video {
      width: auto !important;
      height: 140% !important;
      position: unset !important;
      top: unset !important;
      left: unset !important;
      -o-object-fit: none !important;
      object-fit: none !important;
    }
  }

  .awssld__controls__arrow-left:before,
  .awssld__controls__arrow-left:after,
  .awssld__controls__arrow-right:before,
  .awssld__controls__arrow-right:after {
    background-color: #111 !important;
  }

  .awssld__startUp img {
    width: 15% !important;
    height: auto !important;
  }

  .awssld__container {
    padding-bottom: 30% !important;

    @media all and (max-width: 500px) {
      padding-bottom: calc(30% * 1.25) !important;
    }
  }

  .awssld__bar {
    background-color: #ff5b2b !important;
  }

  @media only screen and (max-width: 600px) {
    .awssld__wrapper {
      height: 284px !important;
    }
  }
`

export const Title = styled.div`
  text-align: center;

  h1 {
    color: #ff5b2b;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-transform: uppercase;
    margin-bottom: 1rem;
    font-family: 'Alatsi', sans-serif;
  }
`
