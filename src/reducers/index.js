import { combineReducers } from "redux";

import { loginReducer, signupReducer, logoutReducer } from "./auth";

export default combineReducers({
    login : loginReducer,
    signup : signupReducer,
    logout : logoutReducer
});