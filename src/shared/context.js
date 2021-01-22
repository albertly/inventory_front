import React, { useReducer} from 'react';

const SET_TOKEN = 'SET_TOKEN';
const CLEAR_TOKEN = 'CLEAR_TOKEN';

const ContextMain = React.createContext();

const initialState = { token: 'albert_token', anotherValue: ''};

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

export {
    ContextMain,
    ContextProvider,
    setToken,
    clearToken 
}