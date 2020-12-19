//  authentication actions

import { BASE_URL } from './config';
// import { history } from "../App";

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

const removeError = () => {
    return {
        type : 'REMOVE_ERROR'
    }
}

export const loginUser = (username, password) => {
    return async (dispatch) => {
        dispatch(startLogin());
        //  sending login request to get the login token 
        fetch(BASE_URL+'/api/auth/login/', {
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
            localStorage.setItem('user', JSON.stringify(data.user))
            dispatch(loginSuccess(data.user));
        }).catch(err => {
            dispatch(loginError(err));
            dispatch(removeError());
        })
    }
}

const signupStart = () => {
    return {
        type : 'SIGNUP_START'
    }
}

const signupError = (err) => {
    return {
        type : 'SIGNUP_ERROR',
        payload : err
    }
}

const signupSuccess = (user) => {
    return {
        type : 'SIGNUP_SUCCESS',
        payload : user
    }
}

//  action to signup the user 
export const signupUser = (fname, username, email, password) => {
    return async dispatch => {
        dispatch(signupStart());
        fetch(BASE_URL+"/api/auth/signup/", {
            method : 'POST',
            body : JSON.stringify({
                fname : fname.toString(),
                username : username.toString(),
                email : email.toString(),
                password : password.toString()
            }),
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(res=>res.json())
        .then(data => {
            if(data.error) {
                dispatch(signupError(data.error))
                return dispatch(removeError())
            }
            dispatch(signupSuccess(data))
        }).catch(err => {
            dispatch(signupError(err))
            dispatch(removeError(err))
        })
    }
}

const logout = () => {
    return {
        type : 'LOGOUT'
    }
}


export const logoutUser = () => {
    return async dispatch => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        dispatch(logout());
    }
}

export const changeLoginState = (token = localStorage.getItem('token')) => {
    return async dispatch => {
        let user = await (await fetch(BASE_URL+'/api/auth/validate/?token='+token)).json();
        if(user.error) {
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            dispatch(logoutUser());
        }else{
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            dispatch(loginSuccess(user));
        }
    }
}


const startPasswordChange = () => {
    return {
        type : 'PASSWORD_CHANGE_START'
    }
}

const passwordChangeError = (err) => {
    return {
        type : 'PASSWORD_CHANGE_ERROR',
        payload : err
    }
}

const passwordChangeSuccess = () => {
    return {
        type : 'PASSWORD_CHANGE_SUCCESS'
    }
}

const removeSucces = () => {
    return {
        type : 'REMOVE_SUCCES'
    }
}

export const changePassword = (password, password1, password2) => {
    return async dispatch => {
        dispatch(startPasswordChange());
        let form = new FormData()
        form.append('password', password)
        form.append('password1', password1)
        form.append('password2', password2)
        fetch(BASE_URL+"/api/auth/change_password/", {
            method : "POST",
            headers : {
                'Authorization' : 'Token '+localStorage.getItem('token')
            },
            body : form
        }).then(res => res.json())
        .then(data => {
            if(data.error) {
                dispatch(passwordChangeError(data.error))
                return dispatch(removeError())
            }
            dispatch(passwordChangeSuccess(data))
            dispatch(removeSucces())
        }).catch(err => {
            dispatch(passwordChangeError('Unexpected error'))
            return dispatch(removeError())
        });
    }
}
