import React from 'react'
import './Portfolio.css'
import JulisBakery from './JB.png'
import RCoffeeH from './RCH.png'
import ecommerce from './Ecommerce.png'
import automarket from './AutoMarket.png'
import rosecommerce from './rosecommerce.png'
import rockme from './rockme.png'
import { Container, Col, Row, Button } from 'react-bootstrap'

function Portfolio() {

  

  return (
    <>
    <Container className="portfolioContainer">
        <Row className="portfolioRow">
          <h2 data-aos="fade-down">Proyectos Front-end</h2>

          <Col className="portfolioCol" data-aos="fade-right" data-aos-delay="200">
            <div className="cardBody text-center">
              <img src={JulisBakery} alt="julis bakery" data-aos="flip-down" data-aos-delay="700"/>
              <h1>Juli's Bakery</h1>
              <p>Prototipo de landing page para pastelería. CSS|HTML|JS-Bootstrap.</p>
            </div>
            <Button target="_blank" href="https://emarose.github.io/JulisBakery/" className="portfolioBtn" >Deploy</Button>
            <Button target="_blank" href="https://github.com/emarose/JulisBakery" className="portfolioBtn" >GitHub</Button>
          </Col>

          <Col className="portfolioCol" data-aos="fade-left" data-aos-delay="400">
            <div className="cardBody text-center">
              <img src={RCoffeeH} alt="rose coffee house" data-aos="flip-down" data-aos-delay="700"/>
              <h1>RoseCoffeeHouse</h1>
              <p>Prototipo de landing page para café. CSS|HTML|JS-Bootstrap.</p>
            </div>
            <Button target="_blank" href="https://emarose.github.io/RoseCoffeeHouse/" className="portfolioBtn" >Deploy</Button>
            <Button target="_blank" href="https://github.com/emarose/RoseCoffeeHouse" className="portfolioBtn" >GitHub</Button>
          </Col> 

          <Col className="portfolioCol" data-aos="fade-right" data-aos-delay="200">
            <div className="cardBody text-center">
              <img src={ecommerce} alt="RoseCommerce" data-aos="flip-down" data-aos-delay="700"/>
              <h1>RosEcommerce</h1>
              <p>Prototipo de landing page Ecommerce. Primer proyecto con ReactJS.</p>
            </div>
              <Button target="_blank" href="https://emarose.github.io/rosecommercev1/" className="portfolioBtn" >Deploy</Button>
              <Button target="_blank" href="https://github.com/emarose/rosecommercev1" className="portfolioBtn" >GitHub</Button>
          </Col>

          <Col className="portfolioCol" data-aos="fade-left" data-aos-delay="400">
          <div className="cardBody text-center">
            <img src={automarket} alt="Automarket" data-aos="flip-down" data-aos-delay="700"/>
            <h1>Automarket</h1>
            <p>Front-end con ReactJS y diversas librerías. Challenge de ATICMA-DevPlace</p>
          </div>
            <Button target="_blank" href="https://challenge-gilt.vercel.app/" className="portfolioBtn" >Deploy</Button>
            <Button target="_blank" href="https://github.com/emarose/challenge" className="portfolioBtn" >GitHub</Button>
          </Col>

          <Col className="portfolioCol" data-aos="fade-left" data-aos-delay="400">
          <div className="cardBody text-center">
            <img src={rosecommerce} alt="ecommerce" data-aos="flip-down" data-aos-delay="700"/>
            <h1>Basic CRUD</h1>
            <p>CRUD y sistema de login con Firebase - ReactJS y librerías. </p>
          </div>
            <Button target="_blank" href="https://proyecto1-4ce94.web.app/" className="portfolioBtn" >Deploy</Button>
            <Button target="_blank" href="https://github.com/emarose/TPFinal-ReactUTN" className="portfolioBtn" >GitHub</Button>
          </Col>

          <Col className="portfolioCol" data-aos="fade-left" data-aos-delay="400">
          <div className="cardBody text-center">
            <img src={rockme} alt="" data-aos="flip-down" data-aos-delay="700"/>
            <h1>RockMe</h1>
            <p>Landing page interactiva/musical realizada con ReactJS. -En construcción-</p>
          </div>
            <Button target="_blank" href="#" className="portfolioBtn" >Coming soon</Button>
            <Button target="_blank" href="https://github.com/emarose/rockme" className="portfolioBtn" >GitHub</Button>
          </Col>
        </Row>

    </Container>
    </>
  )
}

export default Portfolio
