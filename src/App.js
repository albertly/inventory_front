import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {useState} from 'react'
import Header from './components/Header';
import Login from './components/Login';
import About from './components/About';
import Home from './components/Home';
import GenericNotFound from './components/GenericNotFound';

import {ContextProvider} from './shared/context';

function App() {

  const [stam, setStam] = useState("albert");
  
  return (
      
      <Router>
        <ContextProvider> 
        <Header name={stam}/>
        
        <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>

            {/* <Route exact path="/account">
              <Home />
            </Route> */}

            <Route path="/login">
              <Login name={stam} setName={setStam} />
            </Route>
            <Route component={GenericNotFound} />
          </Switch>
          </ContextProvider>
      </Router>
  );
}

export default App;
