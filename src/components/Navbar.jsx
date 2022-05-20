import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "../styles/Navbar.css";
import logo from "../images/logoRegistrado.png"


function NavBar() {
  return (
    <Navbar className='containerNavbar' expand="lg">
      <Container>
        <Navbar.Brand href="#home">
        <img
            className="logo"
            src={logo}
            alt="Logo"
        />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            {/* <Nav.Link href="#link">Contactanos</Nav.Link> */}
            <NavDropdown title="Contactanos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Donaciones</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Requisitos de adopción
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Comparte tu historia
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
