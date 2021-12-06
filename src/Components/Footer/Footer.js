import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsMailbox} from 'react-icons/bs'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../logo.png'
import './Footer.css'

function Footer() {
  return (
    <>
      <Container className="footerContainer">
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/emanuel-amerio/"><AiFillLinkedin className="footerIcon"/><sub> Linkedin</sub></a>
            </li>
            <li>
              <a href="https://github.com/emarose/"><AiFillGithub className="footerIcon"/><sub> Github</sub></a>
            </li>
            <li> 
              <a href="https://www.facebook.com/ema.rose.50"><AiFillFacebook className="footerIcon"/><sub> Facebook</sub></a>
            </li>
            <li >
              <Link><BsMailbox className="footerIcon"/><sub> Email</sub></Link>
            </li>
          </ul>
          <div className="logoContainer">
          <span className="footerLegend">Sitio creado por Emanuel Ignacio Amerio | 2021</span>
          <img src={logo} alt="logo" /></div>
      </Container>
   

    </>
  )
}

export default Footer
