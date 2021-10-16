import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import './Navi.css'
import { BsCodeSlash } from 'react-icons/bs';


function Navi() {
  return (
    <>
        <Navbar className="navi" collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="#"><BsCodeSlash className="brand"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Portfolio</Nav.Link>
              <Nav.Link href="#">Conocimientos</Nav.Link>
              <NavDropdown title="Sobre mi" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Quién soy</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Formación</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Mis trabajos</NavDropdown.Item>
              </NavDropdown>
            </Nav>

          </Navbar.Collapse>
          </Container>
        </Navbar>
    </>
  )
}

export default Navi
