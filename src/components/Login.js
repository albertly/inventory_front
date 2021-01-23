import {useState, useEffect, useContext} from 'react';
import axios from 'axios';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

import { useHistory } from "react-router-dom";

import {ContextMain, setToken} from '../shared/context';

//import './Login.css';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: '50px auto',
        width: '25ch',
      },
    textField: {
        width: '25ch',
      }, 
    margin: {
        margin: theme.spacing(1),
      },  
    },
  }));

function Login() {    
   const classes = useStyles(); 
   let history = useHistory(); 
   const {state, dispatch } = useContext(ContextMain); 
   const [email, setEmail] = useState('');
   const [error, setError] = useState(false);
   const [password, setPassword] = useState('');
   const [flag, setFlag] = useState(true);
   const [users, setUsers] = useState([]);


    const clickHandler = (e) => {
        e.preventDefault();
        
        axios.post('/Auth/Login', {
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

    const changeHandlerEmail = e => setEmail(e.target.value);
    const changeHandlerPassword = e => setPassword(e.target.value);


     return (
        <> 
    

    <form className={classes.root}  noValidate autoComplete="off" >
        <div>
            <FormControl className={clsx(classes.margin,  classes.textField)}>  
                             <TextField name="email" id="email" value={email} label="Email address" onChange={changeHandlerEmail} />
            </FormControl>    
        </div>
        <div>
        <FormControl className={clsx(classes.margin,  classes.textField)}>  
            <TextField name="password" id="password"  value={password} label="Password" onChange={changeHandlerPassword} />
        </FormControl> 
        </div>
        <div>
      <button type="submit" className="myborder" onClick={clickHandler}> 
            Submit
       </button>
       {error && (
            <p>Invalid Credentials</p>
        )}  
       </div>
    </form>

        {/* <form>
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
        )}         */}
        </>
    );



}
  
export default Login;