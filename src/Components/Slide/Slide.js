import React from 'react'
import { Container, Row, Carousel } from 'react-bootstrap'

import php from './Titulo Php.jpg'
import placeholderUTN from './placeholderUTNba.png'

function Slide() {
  return (
    <>
      <Container className="slideContainer" style={{marginTop:"150px"}} data-aos="fade-left" data-aos-delay="200" >
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
                <h4 className="font-weight-bold">Programador web Junior</h4>
                <p>Tecnologías: PHP | MYSQL | Bootstrap</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={placeholderUTN}
                alt="UTNba Titulo Full Stack developer STACK MERN"
              />
              <Carousel.Caption>
                <h4 className="font-weight-bold">Desarrollador web Full-Stack</h4>
                <p>Especializacion en ReactJS/Angular/NodeJS</p>
              </Carousel.Caption>
            </Carousel.Item>
            {/* <Carousel.Item>
              <img
                className="d-block w-100"
                src={placeholder}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h5 className="font-weight-bold">Third slide label</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item> */}
          </Carousel>
          </Row>
      </Container>
    </>
  )
}

export default Slide
