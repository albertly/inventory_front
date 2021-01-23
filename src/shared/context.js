import React, { useReducer} from 'react';
import jwt_decode from "jwt-decode";

const SET_TOKEN = 'SET_TOKEN';
const CLEAR_TOKEN = 'CLEAR_TOKEN';

const ContextMain = React.createContext();

const initialState = { token: '', anotherValue: ''};

const reducer = (state, action) => {
    switch(action.type) {
        case SET_TOKEN:            
            return {...state, token: action.payload };        
        case CLEAR_TOKEN:            
            return {...state, token: '' };        

        default:
            return state;
    }
}

function ContextProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = {state, dispatch};

    return (
        <ContextMain.Provider value={value}>{props.children}</ContextMain.Provider>
    );
}

const clearToken = (dispatch) => {
    dispatch({ type: SET_TOKEN, payload: '' });
}
const setToken = (dispatch, token) => {
    dispatch({ type: SET_TOKEN, payload: token });
}

const getRole = (state) => {    
    if (state?.token) {
        const decoded = jwt_decode(state.token);       
        if (decoded.email === 'albert.lyubarsky@gmail.com') {
            return 'Admin';
        }        
        else {
            return 'User';
        }
    }

    return '';
}

export {
    ContextMain,
    ContextProvider,
    setToken,
    clearToken,
    getRole 
}