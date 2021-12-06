import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Formacion.css'
import Slide from '../Slide/Slide'

function Formacion() {
  return (
    <>
      <Container>
        <Row className="formacionRow">       
          <Col className="formacionColTexto"><h2 className="text-center" data-aos="fade-down">Mi formación</h2>
            <div className="formacionWrap">
              <p data-aos="fade-right" data-aos-delay="200">(10/2021 - 01/2022)<strong> ~ ReactJS Training Bootcamp </strong>| Institución: <a className="linkFormacion" href="https://www.aticma.org.ar/bootcamp">DevPlace - ATICMA</a></p>
              <p data-aos="fade-right" data-aos-delay="300">(08/2021 - 03/2022)<strong> ~ Professional FullStack Developer (React/Angular/NodeJS)</strong> | Institución: <a className="linkFormacion" href="https://sceu.frba.utn.edu.ar/e-learning">UTN.ba</a> </p>
              <p data-aos="fade-right" data-aos-delay="400">(04/2020 - En curso)<strong> ~ Analista de Sistemas</strong> | Instituciónes: <a className="linkFormacion" href="https://www.hilet.com/">Instituto Hilet</a> | <a className="linkFormacion"  href="https://iset-bue.infd.edu.ar/sitio/">ISET</a></p>
              <p data-aos="fade-right" data-aos-delay="500">(08/2019 - 12/2019)<strong> ~ Desarrollador PHP Junior</strong> | Institución: <a className="linkFormacion" href="https://www.hilet.com/">Instituto Hilet</a></p>
            </div>  
          </Col>
        </Row>
        <Row>
          <Col>
            <Slide/>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Formacion
