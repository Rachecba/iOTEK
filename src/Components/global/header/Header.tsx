import React, { useState, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink,
} from "reactstrap";

import * as Styled from './Header.style'

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setnavbar] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const toggleActive = () => {
    if (window.scrollY >= 80) {
      setnavbar(true)
    } else {
      setnavbar(false)
    }
  }

  window.addEventListener('scroll', toggleActive);

  return (
    <Styled.NavBar>
      <Navbar expand="md" className={navbar ? 'active' : ''}>
        <NavbarBrand href="/"><img src="\assets\images\Logo Iotek.png" alt="iOTEK logo" /></NavbarBrand>
        <NavbarToggler onClick={toggle}>
          <span>
            <i className="fas fa-bars"></i>
          </span>
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/catalog/">Productos</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Acerca de
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href='#system'>
                  Sistema de iOT3K
                </DropdownItem>
                <DropdownItem href='#storys'>
                  Historias de Éxito
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Sistema
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href='#solutions'>
                  Soluciones
                </DropdownItem>
                <DropdownItem href='#characteristics'>
                  Características
                </DropdownItem>
                <DropdownItem href='#platform'>
                  Plataforma
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Contacto
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href='#contact'>
                  Solicite una cotización
                </DropdownItem>
                <DropdownItem href='#contact'>
                  Ubíquenos
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </Styled.NavBar>
  );
};

export default Header;
