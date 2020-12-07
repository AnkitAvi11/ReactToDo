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