import {useContext, useEffect, useState} from 'react'
import {  Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import {ContextMain, getRole} from '../shared/context';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header() {
    const classes = useStyles();
    const history = useHistory(); 
    const {state, dispatch } = useContext(ContextMain); 
    const ulStyle = {
                     display:"flex",
                     justifyContent: "space-around"
                    };
   
    const [role, setRole] = useState('');
   
    const handleClick = () => {
        let to = '/login';
        if (state.token) {
           to = '/logout'; 
        }
        
        history.push(to);
      }    


    useEffect(() => {
      setRole(getRole(state));
    }, [state, role] )

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
                 <Link to="/">Home</Link>
            </Typography>
            <Typography variant="h6" className={classes.title}>
                  <Link to="/about">About</Link>
            </Typography>            
            <Button color="inherit" onClick={handleClick}>{state.token ? 'Logout' : 'Login'}</Button>
          </Toolbar>
        </AppBar>
      </div>
    );

    // return (
    //   <div>
    //     <div>{name}</div>
    //     <nav style={{width: "50%"}}>
    //       <ul style={ulStyle}>
    //         <li>
    //           <Link to="/">Home</Link>
    //         </li>

    //         {/* <li>
    //           <Link to="/account">Account</Link>
    //         </li> */}

    //         <li>
    //           <Link to="/about">About</Link>
    //         </li>
    //         <li>
    //           {logInOrOut()}
    //         </li>
    //       </ul>
    //     </nav>
    //   </div>
    // );
  }
  
export default Header;
  