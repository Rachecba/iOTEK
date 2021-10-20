import React from "react"
import { Col, Container, Row } from "reactstrap"
import { Link } from "react-router-dom";

import * as Style from './Footer.style'

function Footer() {
    return (
        <Style.Footer>
            <Container>
                <Row>
                    <Col sm='12' md='3'>
                        <h6>ACERCA DE</h6>
                        <Style.Links>
                            <ul className="shortcuts">
                                <li><a href='#system'>Sistema de iOTEK</a></li>
                                <li><a href='#storys'>Historias de éxito</a></li>
                            </ul>
                        </Style.Links>
                    </Col>
                    <Col sm='6' md='3'>
                        <h6>SISTEMA</h6>
                        <Style.Links>
                            <ul className="shortcuts">
                                <li><a href='#solutions'>Soluciones</a></li>
                                <li><a href='#characteristics'>Características</a></li>
                                <li><a href='#platform'>Plataforma</a></li>
                            </ul>
                        </Style.Links>
                    </Col>
                    <Col sm='6' md='3'>
                        <h6>CONTACTO</h6>
                        <Style.Links>
                            <ul>
                                <li><a href='#contact'>Solicite una cotización</a></li>
                                <li><a href='#contact'>Ubíquenos</a></li>
                            </ul>
                        </Style.Links>
                    </Col>
                    <Col sm='6' md='3'>
                        <Style.Info>
                            <div>
                                <i className="fas fa-phone"></i> 2268-0044
                            </div>
                            <div>
                                <i className="fas fa-envelope"></i> soporte@iot3k.com
                            </div>
                          
                        </Style.Info>
                    </Col>
                </Row>
                <Row>
                    <Style.Divide />
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col md='8' sm="6" xs="12">
                        <Style.Copyright>
                            <p>&copy; 2021 All Rights Reserved by
                                iOT3K. Made with <span className='heart'>❤</span> by @rach.codes
                            </p>
                        </Style.Copyright>
                    </Col>
                </Row>
            </Container>
        </Style.Footer>
    )
}

export default Footer