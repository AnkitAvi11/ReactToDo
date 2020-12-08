import { combineReducers } from "redux";

import { loginReducer, signupReducer } from "./auth";

export default combineReducers({
    login : loginReducer,
    signup : signupReducer
});