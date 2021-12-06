import { Container } from 'react-bootstrap';
import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import SobreMiPage from './Pages/SobreMiPage/SobreMiPage';
import HomePage from './Pages/HomePage/HomePage'
import Navi from './Components/Navi/Navi';
import Footer from './Components/Footer/Footer'
import FormacionPage from './Pages/FormacionPage/FormacionPage';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import PortfolioPage from './Pages/PortfolioPage/PortfolioPage';
import ContactoPage from './Pages/ContactoPage/ContactoPage';

function App() {

  useEffect(() => {
    Aos.init({duration: 2000, easing: 'ease', once: true});
  }, [])


  return (
    <Container>
      <Router>
        <Navi/>
        <Switch>
          <Route path="/sobremi" component={SobreMiPage}></Route>
          <Route path="/formacion" component={FormacionPage}></Route>
          <Route path="/portfolio" component={PortfolioPage}></Route>
          <Route path="/contacto" component={ContactoPage}></Route>
          <Route path="/" component={HomePage} exact></Route>
          <Route path="*" component={ErrorPage}></Route>
        </Switch>
        <Footer/>
      </Router>

    </Container>
  );
}

export default App;
