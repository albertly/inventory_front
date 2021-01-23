import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import axios from 'axios';

import { Container } from '@material-ui/core';

import {useContext} from 'react'
import Header from './components/Header';
import Login from './components/Login';
import About from './components/About';
import Home from './components/Home';
import GenericNotFound from './components/GenericNotFound';

import {ContextMain, getRole} from './shared/context';

function App() {
  const {state, dispatch } = useContext(ContextMain);   

  axios.defaults.baseURL = process.env.REACT_APP_REST_API;

  return (
      
      <Router>

        <Container>
          <Header/>
          
          <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route exact path="/" render={

                () => ( getRole(state) ? 
                  <Home /> :
                  <Redirect to='/login' />              
                )

                }
              >

              </Route>

              {/* <Route exact path="/account">
                <Home />
              </Route> */}

              <Route path="/login">
                <Login />
              </Route>
              <Route component={GenericNotFound} />
            </Switch>
          </Container>  
      </Router>
  );
}

export default App;
