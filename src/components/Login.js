import {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

import {ContextMain, setToken} from '../shared/context';

import './Login.css';

function Login( {name, setName} ) {    
   let history = useHistory(); 
   const {state, dispatch } = useContext(ContextMain); 
   const [email, setEmail] = useState('');
   const [error, setError] = useState(false);
   const [password, setPassword] = useState('');
   const [flag, setFlag] = useState(true);
   const [users, setUsers] = useState([]);
   const users1 = [
       {name: 'albert', id:18},
      {name: 'dudu', id: 19}
   ]

   // before render
   useEffect(() => {
       // call to back-end for data for specific user with email
       // set users to new data
       setUsers(users1); 
       
  }, [users, users1]);

    const clickHandler = (e) => {
        e.preventDefault();
        
        console.log('email', email);
        console.log('password', password);
        debugger;
        try {
        axios.post('https://localhost:5001/Auth/Login', {
            eMail: email,
            password
          })
          .then(function (response) {              
            console.log(response);
            setToken(dispatch, response.data);
            setError(false);
            history.push("/");
          })
          .catch(function (error) {
            console.log(error);
            setError(true);
          })
        }
        catch(err) {
            console.log(err);
        }

    }

    const changeHandlerEmail = e => setEmail(e.target.value);
    const changeHandlerPassword = e => setPassword(e.target.value);

     return (
        <> 
        <div>{state.token}</div> 
        <div><button onClick={() => setName('Dudi')}>Set Name</button> </div>
        <div>
            {flag && (
                <p>Hello</p>
            )}  

        {users.map(u=> (
            <div key={u.id}>
                {u.name}
                <br></br>
                {u.id}
            </div>
        ))}

        <form>
            <h3>Login</h3>
            <label>
            Email address
            <input type="email" name="email" value={email} onChange={changeHandlerEmail}/>
            </label>
            <label>
            Password
            <input type="password" name="password" value={password} onChange={changeHandlerPassword}/>
            </label>
            <button type="submit" className="myborder" onClick={clickHandler}> 
            Submit
            </button>
        </form>
        {error && (
            <p>Invalid Credentials</p>
        )}
        </div>
        </>
    );



}
  
export default Login;