import {useState, useEffect} from 'react';
import axios from 'axios';

import './Login.css';

function Login( props ) {    
   const [email, setEmail] = useState('');
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
       console.log('Props', props)
  }, []);

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
          })
          .catch(function (error) {
            console.log(error);
          })
        }
        catch(err) {
            console.log(err);
        }

    }

    const changeHandlerEmail = e => setEmail(e.target.value);
    const changeHandlerPassword = e => setPassword(e.target.value);

     return (
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
        </div>
    );



}
  
export default Login;