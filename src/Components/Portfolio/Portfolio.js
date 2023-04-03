import React from "react";
import "./Portfolio.css";
import JulisBakery from "./JB.png";
import RCoffeeH from "./RCH.png";
import ecommerce from "./Ecommerce.png";
import automarket from "./AutoMarket.png";
import rosecommerce from "./rosecommerce.png";
import rockme from "./rockme.png";
import { Container, Col, Row, Button } from "react-bootstrap";

function Portfolio() {
  return (
    <>
      <Container className="portfolioContainer">
        <Row className="portfolioRow mb-5">
          <h2 data-aos="fade-down">Portfolio</h2>

          <Col className="portfolioCol">
            <div className="cardBody text-center">
              <img
                src={JulisBakery}
                alt="julis bakery"
                data-aos="flip-down"
                data-aos-delay="700"
              />
              <h1>Juli's Bakery</h1>
              <p>Landing page para pastelería.</p>
              <p>CSS|HTML|JS-Bootstrap.</p>
              <p>Proyecto individual - autodidacta. Emprendimiento familiar</p>
            </div>
            <Button
              target="_blank"
              href="https://emarose.github.io/JulisBakery/"
              className="portfolioBtn"
            >
              Deploy
            </Button>
            <Button
              target="_blank"
              href="https://github.com/emarose/JulisBakery"
              className="portfolioBtn"
            >
              GitHub
            </Button>
          </Col>

          <Col className="portfolioCol">
            <div className="cardBody text-center">
              <img
                src={RCoffeeH}
                alt="rose coffee house"
                data-aos="flip-down"
                data-aos-delay="700"
              />
              <h1>RoseCoffeeHouse</h1>
              <p>Landing page para café.</p>
              <p>CSS|HTML|JS-Bootstrap.</p>
              <p>Proyecto individual - autodidacta.</p>
            </div>
            <Button
              target="_blank"
              href="https://emarose.github.io/RoseCoffeeHouse/"
              className="portfolioBtn"
            >
              Deploy
            </Button>
            <Button
              target="_blank"
              href="https://github.com/emarose/RoseCoffeeHouse"
              className="portfolioBtn"
            >
              GitHub
            </Button>
          </Col>

          <Col className="portfolioCol">
            <div className="cardBody text-center">
              <img
                src={ecommerce}
                alt="RoseCommerce"
                data-aos="flip-down"
                data-aos-delay="700"
              />
              <h1>RosEcommerce</h1>
              <p>Landing page de e-commerce.</p>
              <p>Primer proyecto utilizando ReactJS.</p>
              <p>Proyecto individual - autodidacta.</p>
            </div>
            <Button
              target="_blank"
              href="https://emarose.github.io/rosecommercev1/"
              className="portfolioBtn"
            >
              Deploy
            </Button>
            <Button
              target="_blank"
              href="https://github.com/emarose/rosecommercev1"
              className="portfolioBtn"
            >
              GitHub
            </Button>
          </Col>

          <Col className="portfolioCol">
            <div className="cardBody text-center">
              <img
                src={rockme}
                alt="rockme"
                data-aos="flip-down"
                data-aos-delay="700"
              />
              <h1>RockMe</h1>
              <p>
                Landing page interactiva/musical realizada con ReactJS. -En
                construcción-
              </p>
              <p>ReactJS, Librerias de audio</p>
              <p>Proyecto individual - autodidacta.</p>
            </div>
            <Button
              target="_blank"
              href="https://rockme.vercel.app/"
              className="portfolioBtn"
            >
              Deploy
            </Button>
            <Button
              target="_blank"
              href="https://github.com/emarose/rockme"
              className="portfolioBtn"
            >
              GitHub
            </Button>
          </Col>

          <Col className="portfolioCol">
            <div className="cardBody text-center">
              <img
                src={automarket}
                alt="Automarket"
                data-aos="flip-down"
                data-aos-delay="700"
              />
              <h1>Automarket</h1>
              <p>Landing Page de Concesionaria</p>
              <p>Challenge de ingreso al Bootcamp ATICMA-DevPlace.</p>
              <p>Proyecto individual - ATICMA-DevPlace.</p>
            </div>
            <Button
              target="_blank"
              href="https://challenge-gilt.vercel.app/"
              className="portfolioBtn"
            >
              Deploy
            </Button>
            <Button
              target="_blank"
              href="https://github.com/emarose/challenge"
              className="portfolioBtn"
            >
              GitHub
            </Button>
          </Col>

          <Col className="portfolioCol">
            <div className="cardBody text-center">
              <img
                src={rosecommerce}
                alt="ecommerce"
                data-aos="flip-down"
                data-aos-delay="700"
              />
              <h1>E-commerce CRUD</h1>
              <p>Login/Register - Sistema de gestión de productos</p>
              <p>CRUD / Firebase - ReactJS y librerías. </p>
              <p>Proyecto individual - UTNBa.</p>
            </div>
            <Button
              target="_blank"
              href="https://proyecto1-4ce94.web.app/"
              className="portfolioBtn"
            >
              Deploy
            </Button>
            <Button
              target="_blank"
              href="https://github.com/emarose/TPFinal-ReactUTN"
              className="portfolioBtn"
            >
              GitHub
            </Button>
          </Col>
        </Row>
        {/* 
        <Row>
          <h1 data-aos="fade-right" className="my-5 text-center">
            DevPlace Bootcamp
          </h1>
          <Col className="d-flex flex-wrap gap-5 mb-5 text-center">
            <div className="bootcamp-item">
              <a
                href="https://bootcamp-cards2.vercel.app/"
                rel="noreferrer"
                target="_blank"
              >
                Card
              </a>
              <hr />
              <p>Actividad práctica individual</p>
            </div>
            <div className="bootcamp-item">
              <a
                href="https://bootcamp-cards1.vercel.app/"
                rel="noreferrer"
                target="_blank"
              >
                Card Group
              </a>
              <hr />
              <p>Actividad práctica individual</p>
            </div>
            <div className="bootcamp-item">
              <a
                href="https://bootcamp-cards3.vercel.app/"
                rel="noreferrer"
                target="_blank"
              >
                Card Group - Actividad Grupal
              </a>
              <hr />
              <p>Actividad práctica individual</p>
            </div>
            <div className="bootcamp-item">
              <a
                href="https://bootcamp-landing1.vercel.app/"
                rel="noreferrer"
                target="_blank"
              >
                Landing Page Starbucks
              </a>
              <hr />
              <p>Actividad práctica individual</p>
            </div>
            <div className="bootcamp-item">
              <a
                href="https://silly-meitner-d9ba5b.netlify.app/"
                rel="noreferrer"
                target="_blank"
              >
                Card JS
              </a>
              <hr />
              <p>Actividad práctica individual</p>
            </div>
          </Col>
        </Row> */}
      </Container>
    </>
  );
}

export default Portfolio;
