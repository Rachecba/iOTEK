
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Row } from 'reactstrap';
import {  PlatformArray } from '../../../utils/constants/Constants';

import * as Styled from './Platform.style'

function Platform() {
    const [ref, inView] = useInView()
    const [className, setClassName] = React.useState('')

    
    useEffect(() => {
        if (inView) {
            setClassName('animation')
        }
      }, [inView]);

    
    return (
        <Styled.Container id='platform'>
            <Row>
                <Styled.Title>
                    <h1>PLATAFORMA</h1>
                    <p>El servidor en la nube ofrece el monitoreo remoto desde cualquier dispositivo inteligente, brindándole supervisión en tiempo real de sus productos y procesos.</p>
                </Styled.Title>
            </Row>
            <Styled.CardContainer>
                {PlatformArray.map((item) => {
                    return (
                            <Styled.Card ref={ref}>
                                <div className="header-div">
                                    <img alt={item.title} src={item.img} className={className}/>
                                    <h4>{item.title}</h4>
                                </div>
                                <div className="text-div">
                                    <p>{item.text}</p>
                                </div>
                            </Styled.Card>
                    )
                })}
            </Styled.CardContainer>
        </Styled.Container>
    )
}

export default Platform