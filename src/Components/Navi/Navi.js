import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navi.css";
import { BsCodeSlash } from "react-icons/bs";
import { Link } from "react-router-dom";

function Navi() {
  return (
    <>
      <Navbar
        className="navi"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Link to="/">
            <BsCodeSlash className="brand mx-3" />
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto nav-link" bg="dark">
              <Link to="/sobremi">Sobre mi</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/formacion">Formación</Link>
              {/*  <Link to="/contacto">Contactame</Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navi;
