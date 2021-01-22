import {useContext, useEffect, useState} from 'react'
import {  Link } from 'react-router-dom';

import {ContextMain, getRole} from '../shared/context';

function Header({name}) {
    const {state, dispatch } = useContext(ContextMain); 
    const ulStyle = {
                     display:"flex",
                     justifyContent: "space-around"
                    };
   
    const [role, setRole] = useState('');
   
    const logInOrOut = () => {      
      debugger;      
      return <Link to={state.token ? '/logout' : '/login'}> {state.token ? 'Logout' : 'Login'} </Link>
    } 

    useEffect(() => {
      setRole(getRole(state));
    }, [state, role] )

    return (
      <div>
        <div>{name}</div>
        <nav style={{width: "50%"}}>
          <ul style={ulStyle}>
            <li>
              <Link to="/">Home</Link>
            </li>

            {/* <li>
              <Link to="/account">Account</Link>
            </li> */}

            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              {logInOrOut()}
            </li>
          </ul>
        </nav>
      </div>
    );
  }
  
export default Header;
  