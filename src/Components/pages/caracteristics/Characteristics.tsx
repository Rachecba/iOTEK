
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Row } from 'reactstrap';
import styled from 'styled-components';
import { characteristicsArray } from '../../../utils/constants/Constants';
import TextCarousel from '../../global/homeHeader/HomeHeader';

import * as Styled from './Characteristics.style'

function Characteristics() {
    const [ref, inView] = useInView()
    const [className, setClassName] = React.useState('')

    
    useEffect(() => {
        if (inView) {
            setClassName('animation')
        }
      }, [inView]);

    return (
        <Styled.Container id='characteristics'>
            <Styled.Layer>
            <Row>
                <Styled.Title>
                    <h1>CARACTERÍSTICAS DE LA SOLUCIÓN DE iOTEK</h1>
                </Styled.Title>
            </Row>
            <Styled.CardsContainer>
                {characteristicsArray.map((item) => {
                    return (
                        <Styled.Card className={className} ref={ref} >
                            <div className="image-div">
                                <img alt='image' src={item.image}/>
                            </div>
                            <div className="text-div">
                                <h5>{item.text}</h5>
                            </div>
                        </Styled.Card>
                    )
                })}
                </Styled.CardsContainer>
            </Styled.Layer>
        </Styled.Container>
    )
}

export default Characteristics