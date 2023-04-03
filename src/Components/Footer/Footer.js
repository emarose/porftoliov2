import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../logo.png";
import "./Footer.css";

function Footer() {
  return (
    <>
      <Container fluid className="footerContainer">
        <ul>
          <li className="text-white">
            <a href="https://www.linkedin.com/in/emanuel-amerio/">
              <span className="d-flex align-items-baseline gap-3">
                <AiFillLinkedin />
                <p>LinkedIn</p>
              </span>
            </a>
          </li>
          <li className="text-white">
            <a href="https://github.com/emarose/">
              <span className="d-flex align-items-baseline gap-3">
                <AiFillGithub />
                <p>Github</p>
              </span>
            </a>
          </li>
          <li></li>
          <li className="text-white">
            <span className="d-flex align-items-baseline gap-3">
              <AiOutlineMail />
              <h5>emanuelamerio.rose@gmail.com</h5>
            </span>
          </li>
        </ul>
        <div className="logoContainer">
          <span className="footerLegend">Emanuel Ignacio Amerio</span>
        </div>
      </Container>
    </>
  );
}

export default Footer;
