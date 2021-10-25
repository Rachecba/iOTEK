import React, { useState } from 'react';
import { Col, Row } from 'reactstrap';
import * as Styled from './HomeHeader.style'

function HomeCarousel() {

  return (
    <Styled.Container>
      <Styled.MainContainer>
      <Styled.Text>
        <Styled.TextContainer>
          <Styled.FirstLine>
            <h1>Transformamos como las organizaciones </h1>
          </Styled.FirstLine>
          <Styled.SecondLine>
            <h1>perciben, monitorean y toman decisiones</h1>
          </Styled.SecondLine>
          <Styled.Paragraph>
            <p>Una plataforma sofisticada para monitorear remotamente implementaciones de dispositivos de
              cualquier tamaño, en cualquier lugar y en industrias tan variadas como: <b> energía, salud, industria,
              alimentos y agricultura. </b>
            </p>
          </Styled.Paragraph>
        </Styled.TextContainer>
      </Styled.Text>

        <Styled.Image>
            <img src='assets/images/Product.png'/>
        </Styled.Image>
        </Styled.MainContainer>

        <a href='#system'><div className="arrow bounce"></div></a>

    </Styled.Container>  
  )
}

export default HomeCarousel