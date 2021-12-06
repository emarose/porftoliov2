import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './SobreMi.css'
import { SiJavascript } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { SiPython } from 'react-icons/si';
import { SiNodedotjs } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiFlask } from 'react-icons/si';
import { SiAngular } from 'react-icons/si';
import foto from './foto.jpg'


function SobreMi() {
  return (
    <>
    <Container fluid className="sobremiContainer mt-5">
      <h2 data-aos="fade-down">Sobre Mi</h2>
      <Row className="sobremiRow">
        <Col className="text-center mt-5">
          <h1>Quién soy</h1>

          <div data-aos="fade-right" data-aos-delay="500" className="descripcion mt-5">
            <img src={foto} data-aos="fade-in" alt="foto" className="foto" />
            <div className="descripcionTexto">
              <p>Mi nombre es Emanuel, soy una persona proactiva - me encanta aprender, investigar, desarrollar nuevas habilidades y realizar proyectos propios.</p>
              <p>Programar y diseñar son mis pasiones, unificandose esto en el desarrollo Front-End, en lo que intento darle un toque de creatividad y estilo a todo lo que hago. Me encanta trabajar en equipo, intercambiar ideas y colaborar en proyectos.</p> 
              <p>Mis especialidades incluyen aprender rápidamente nuevos conceptos, lenguajes y paradigmas de programación, resolver problemas de forma rapida y eficiente, trabajar con metodologías ágiles.</p>
              <p>Puedo comunicarme fluidamente en inglés tanto escrito como oralmente.</p>  
            </div>
          </div>

        </Col>
        <Col className="text-center mt-5">
          <h1>Habilidades</h1>
          <div data-aos="fade-left" data-aos-delay="500" className="habilidades mt-5 ">
            <p><strong>Diseño/edición: </strong> Utilizo frecuentemente herramientas de diseño y maquetado (FIGMA) y edición (Photoshop) para darle un toque único a mis proyectos.</p>
            <p><strong>Programación: </strong>
              Me encanta programar en Python y utilizar el micro-Framework FLASK para realizar APIs y routeo, desarrollando el Front-End con Html | CSS | JS y ReactJS.
              Desde mediados de 2021 estudio, practico y desarrollo proyectos utilizando NodeJS y Angular en lugar de Python. </p>
            <p><strong>Tecnología:</strong> Tengo experiencia y conocimiento en instalación, configuración y matenimiento de redes y sistemas informáticos.</p>
            <p><strong>Herramientas:</strong> Integro GitHub en todos mis proyectos y utilizo diversas herramientas para gestionar proyectos (Trello, Slack)<br/>DevOps: Docker</p>
            <p><strong>Soft Skills:</strong> Flexibilidad / adaptabilidad. Aprendo rápidamente. Me entusiasma el trabajo en equipo. Facilidad en la resolución de problemas. Metodologías agiles (SCRUM) para desarrollo de software. </p>
          </div>
        </Col>
      </Row>

      <Container fluid className="lenguajesContainer">
        <Row  data-aos="flip-left" data-aos-delay="20" className="lenguajes d-flex">
          <Col className="wrapImg">
            <h1>Front<br/>End</h1>
          </Col>
          <Col className="wrapTexto w-100" >
            <p>JavaScriptES6<br/><SiJavascript size='42px'/></p>
            <p>HTML5<br/><SiHtml5 size='42px'/></p>
            <p>CSS3<br/><SiCss3 size='42px'/ ></p>
            <p>ReactJS<br/><SiReact size='42px'/></p>
          </Col>
        </Row>

        <Row data-aos="flip-right" data-aos-delay="40" className="lenguajes d-flex mt-5" >
          <Col className="wrapTexto w-100">
            <p>NodeJS<br/><SiNodedotjs size='42px'/></p>
            <p>Python<br/><SiPython size='42px'/></p>
            <p>MySQL | MongoDB<br/><SiMongodb size='42px'/></p>
          </Col>
          <Col className="wrapImg">
            <h1>Back<br/>End</h1>
          </Col>
        </Row>
        
        <Row data-aos="flip-left" data-aos-delay="60" className="lenguajes d-flex mt-5" >
          <Col className="wrapImg">
            <h1 className="p-4">Frameworks</h1>
          </Col>
          <Col className="wrapTexto w-100">
            <p>Flask<br/><SiFlask size='42px'/> </p>
            <p>Angular<br/><SiAngular size='42px'/> </p>
          </Col>
        </Row>
      </Container>

    </Container>
    </>
  )
}

export default SobreMi
