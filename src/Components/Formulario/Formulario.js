import React from "react";
import { Container, Form, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { BsFillBriefcaseFill } from "react-icons/bs";
import logo from '../../logo.png'
import "./Formulario.css";
import emailjs from "emailjs-com";

function Formulario() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_73pfil5",
        "template_cnpfb9c",
        e.target,
        "user_EhIlP8yqPZEtydtnFB1et"
      )
      .then(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
    e.target.reset();
  }

  return (
    <>
      <Container className="formContainer">
        <img src={logo} style={{width:"150px", borderRadius:"8px"}} alt="logo" />
        <h1 className="text-center my-5 text-white">Contactame!</h1>
        <Row>
          <Col>
            <Form onSubmit={sendEmail}>
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="Ingresa tu email"
                    required
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Control
                    name="name"
                    type="text"
                    placeholder="Ingresa tu nombre"
                    required
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Control
                    name="message"
                    required
                    as="textarea"
                    placeholder="Deja tu comentario!"
                    style={{ height: "100px" }}
                  />
                </Form.Group>
              </Row>

              <Button className="btn btn-custom" type="submit">
                Enviar
              </Button>
            </Form>
          </Col>

          <div className="wrapContacto">
            <h1 className="text-center my-5 text-white">Más sobre mi</h1>
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/emanuel-amerio/">
                  <AiFillLinkedin />
                </a>
              </li>
              <li>
                <a href="https://github.com/emarose/">
                  <AiFillGithub />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/ema.rose.vampire.slayer/">
                  <AiFillInstagram />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/ema.rose.50">
                  <AiFillFacebook />
                </a>
              </li>
              <li>
                <Link to="/portfolio">
                  <BsFillBriefcaseFill />
                </Link>
              </li>
            </ul>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Formulario;
