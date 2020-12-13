
const initial_state = {
    loading : false,
    error : null,
    user : null
}

export const loginReducer = (state = initial_state, action) => {
    switch(action.type) {
        case 'LOGIN_START' : 
        return {
            ...state,
            loading : true,
        }
        case 'LOGIN_ERROR' : return {
            ...state,
            loading : false,
            error : action.payload
        }

        case 'LOGIN_SUCCESS' : return {
            ...state,
            loading : false,
            error : null,
            user : action.payload
        }

        case 'REMOVE_ERROR' : return {
            ...state,
            error : null
        }

        default : return state
    }
}


export const signupReducer = (state = initial_state, action) => {
    switch(action.type) {
        case 'SIGNUP_START' : return {
            ...state,
            loading : true
        }

        case 'SIGNUP_ERROR' : return {
            ...state,
            loading : false,
            error : action.payload
        }

        case 'SIGNUP_SUCCESS' : return {
            ...state,
            loading : false,
            user : action.payload,
            error : null
        }

        case 'REMOVE_ERROR' : return {
            ...state,
            error : null
        }

        default : return state
    }
}

export const logoutReducer = (state = {status : false}, action) => {
    if (action.type === 'LOGOUT') {
        return {
            ...state,
            status : true
        }
    }
    return state
}


export const loginState = (state={status : false}, action) => {
    switch(action.type) {
        case 'VALIDATION_FAILED' :return {
            ...state,
            status : false
        }

        case 'VALIDATED' : return {
            ...state,
            status : true
        }

        default : return state;
    }
}


export const passwordChangeReducer = (state={
    loading : false,
    error : null,
    message : null
}, action) => {
    switch(action.type) {
        case 'PASSWORD_CHANGE_START' :
            return {
                ...state,
                loading : true
            }

        case 'PASSWORD_CHANGE_ERROR' : 
            return {    
                ...state,
                loading : false,
                error : action.payload
            }   

        case 'PASSWORD_CHANGE_SUCCESS' : 
            return {
                ...state,
                loading : false,
                error : null,
                message : 'Password changed succesfully'
            }

        case 'REMOVE_ERROR' : return {
            ...state,
            error : null
        }

        default : return state;
    }

}