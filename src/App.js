import { Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './Pages/Home/Home'

function App() {
  return (
    <Container>
      <Router>


        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/conocimientos">

          </Route>
          <Route path="/quiensoy">

          </Route>
          <Route path="/portfolio">

          </Route>

        </Switch>
      </Router>

    </Container>
  );
}

export default App;
