import React from "react";
import { Container, Row, Carousel } from "react-bootstrap";

import php from "./CertificadoPhp.jpg";
import react from "./CertificadoReact.jpg";
import uxUi from "./CertificadoUX-UI.jpg";
import nodejs from "./CertificadoNodeJS.jpg";

function Slide() {
  return (
    <>
      <Container
        className="slideContainer"
        style={{ marginTop: "150px" }}
        data-aos="fade-left"
        data-aos-delay="200"
      >
        <h1 className="my-3">Certificados</h1>
        <Row className="my-5">
          <Carousel variant="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={php}
                alt="Titulo PHP Junior developer"
              />
              <Carousel.Caption>
                <h4 className="fw-bold bg-light">Programador web PHP Junior</h4>
                <p className="fw-bold bg-light">
                  Tecnologías: PHP | MYSQL | Bootstrap
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={react}
                alt="Certificado UTNba ReactJS"
              />
              <Carousel.Caption>
                <h4 className="fw-bold bg-light">Desarrollo en ReactJS</h4>
                <p className="fw-bold bg-light">
                  React Hooks | Redux | Axios | APIs
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={nodejs}
                alt="UTNba Titulo Full Stack developer STACK MERN"
              />
              <Carousel.Caption>
                <h4 className="fw-bold bg-light">
                  Desarrollador web Full-Stack
                </h4>
                <p className="fw-bold bg-light">
                  Especializacion en ReactJS/Angular/NodeJS
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={uxUi}
                alt="UTNba Titulo Full Stack developer STACK MERN"
              />
              <Carousel.Caption>
                <h4 className="fw-bold bg-light">
                  Diseño de Interfaz de Usuario
                </h4>
                <p className="fw-bold bg-light">
                  Especializacion en Figma/Wireframing/UX Writing
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
    </>
  );
}

export default Slide;
