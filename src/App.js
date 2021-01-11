import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './components/Header';
import Login from './components/Login';
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
      <Router>
      <Header/>
      
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
             <Login stam="albert"/>
          </Route>

        </Switch>
      </Router>
  );
}

export default App;
