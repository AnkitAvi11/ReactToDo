import { combineReducers } from "redux";

import { loginReducer, signupReducer, logoutReducer, loginState } from "./auth";

export default combineReducers({
    login : loginReducer,
    signup : signupReducer,
    logout : logoutReducer,
    status : loginState
});