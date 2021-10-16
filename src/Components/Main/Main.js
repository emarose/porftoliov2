import React from 'react'
import { Container, Button, Row } from 'react-bootstrap'
import './Main.css'
import { BsPlayCircle } from 'react-icons/bs';




function Main() {
  return (
    <>
      <Container className="mainContainer">
        <div className="text-center">
          <h2 className="type-animation nombre">Emanuel Amerio</h2>
          <h2 className="nombre2 fade-in ">Emanuel Amerio</h2>
          <Button><BsPlayCircle /></Button>
        </div>
      </Container>
    </>
  )
}

export default Main
