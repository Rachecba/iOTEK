
import React, { useState } from 'react';
import { Row } from 'reactstrap';
import { testimonials } from '../../../utils/constants/Constants';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import * as Styled from './Storys.style';


function Storys() {
  
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <Styled.Container id='storys'>
      <Row>
        <h1>Casos de Éxito</h1>
        <p>Nuestros clientes nos comentan cómo nuestro sistema les ha facilitado el trabajo</p>
      </Row>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={6000}
        touchEnabled={true}
        bullets={true}>
          {testimonials.map((item) => {
            return(
            <div data-src={item.image}/>
            )
          })}
      </AutoplaySlider>
    </Styled.Container>  
  );
}

export default Storys