//  authentication actions

import { BASE_URL } from './config';  

const startLogin = () => {
    return {
        type : 'LOGIN_START'
    }
}

const loginError = (err) => {
    return {
        type : 'LOGIN_ERROR',
        payload : err
    }
}

const loginSuccess = (user) => {
    return {
        type : 'LOGIN_SUCCESS',
        payload : user
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
            body : {
                username : username,
                password : password
            }
        }).then(res => res.json())
        .then(data => {
            console.log(data);
        }).catch(err => {
            console.log(err);
        })
    }
}


export const is_authenticated = () => {
    return async dispatch => {
        
    };
}