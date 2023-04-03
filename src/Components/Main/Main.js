import React from "react";
import { Container } from "react-bootstrap";
import "./Main.css";
import { FaPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      <Container fluid className="mainContainer">
        <div className="text-center">
          <h2 className="type-animation nombre">
            Emanuel <span className="letterColor">A</span>merio
          </h2>
          <h2 data-aos="fade-in" data-aos-delay="1000" className="nombre2">
            <span className="letterColor">F</span>ullstack developer
          </h2>
          <Link to="/sobremi" className="mainButton">
            <FaPlayCircle className="playButton" />
          </Link>
        </div>
      </Container>
    </>
  );
}

export default Main;
