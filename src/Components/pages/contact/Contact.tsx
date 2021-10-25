import { Button, createStyles, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import styled from "styled-components";

import * as Styled from './Contact.style'

function Contact() {
  const classes = makeStyles((theme: Theme) =>
        createStyles({
            containedPrimary: {
              backgroundColor: '#FF4A15',
              '&:hover': {
                  backgroundColor: '#EC400D',
              },
              width: '100%',
              marginBottom: '2rem',
              fontFamily: `'Alatsi', sans-serif`,
            },
        }),
  );
  
  return (
    <Styled.Container id='contact'>
    <Row>
        <Styled.Title>
            <h1>CONTÁCTENOS</h1>
        </Styled.Title>
      </Row>
      <Styled.SecondContainer>
        <Styled.TextContainer>
          <h4>¡Póngase en contacto con nosotros!</h4>
          <p>Déjenos un mensaje y estaremos respondiéndole muy pronto.</p>
          <p>También puede contáctarnos a nuestro correo, número telefónico o bien, <br/> lo resiviremos en nuestras oficinas.</p>
          <Styled.ContactContainer>
            <p className="phone-number"><span><i className="fas fa-phone"></i></span> <b>4705-1698</b> </p>
            <p><span><i className="fas fa-envelope"></i></span> <b> soporte@iot3k.com </b> </p>
          </Styled.ContactContainer>
          <p><span><i className="fas fa-map-marker-alt"></i></span> <b> Heredia, Santo Domingo, Condominio Villangel, local #5 </b> </p>
          <iframe src="https://embed.waze.com/iframe?zoom=15&lat=9.989680&lon=-84.057320&pin=1&desc=1"
            width="300" height="400"></iframe>
        </Styled.TextContainer>
        <Styled.FormContainer>
            <Form method='POST' action='https://formspree.io/f/xrgrvzpw'>
              <FormGroup>
                <Label for="nameInput">Nombre</Label>
                <Input type="text" name="name" id="nameInput" placeholder="Ingrese su nombre completo" />
              </FormGroup>
              <FormGroup>
                <Label for="emailInput">Correo electrónico</Label>
                <Input type="email" name="email" id="emailInput" placeholder="Ingrese su correo electrónico" />
              </FormGroup>
              <FormGroup>
                <Label for="messageInput">Mensaje</Label>
                <Input type="textarea" name="text" id="messageInput" />
              </FormGroup>
              <Button className={classes().containedPrimary} variant="contained" color="primary" type='submit'>ENVIAR</Button>
            </Form>
          </Styled.FormContainer>
      </Styled.SecondContainer>
</Styled.Container>
  )
}

export default Contact