//  authentication actions

import { BASE_URL } from './config';
// import { history } from "../App";

const startLogin = () => {
    console.log('Start login action')
    return {
        type : 'LOGIN_START'
    }
}

const loginError = (err) => {
    console.log('Login error action')
    return {
        type : 'LOGIN_ERROR',
        payload : err
    }
}

const loginSuccess = (user) => {
    console.log('login success action');
    return {
        type : 'LOGIN_SUCCESS',
        payload : user
    }
}

const removeError = () => {
    return {
        type : 'REMOVE_ERROR'
    }
}

export const loginUser = (username, password) => {
    return async (dispatch) => {
        dispatch(startLogin());
        //  sending login request to get the login token 
        fetch(BASE_URL+'api/auth/login/', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                "username" : username.toString(),
                "password" : password.toString()
            })
        }).then(res => res.json())
        .then(data => {
            if (data.error) {
                dispatch(loginError(data))
                return dispatch(removeError())
            }
            localStorage.setItem('token', data.token)            
            localStorage.setItem('user', data.user)
            dispatch(loginSuccess(data));
        }).catch(err => {
            dispatch(loginError(err));
            dispatch(removeError());
        })
    }
}
