import { combineReducers } from "redux"

import LoginReducer from "./LoginReducer";
import LocationReducer from "./LocationReducer";

const reducers = combineReducers({
    login: LoginReducer,
    location: LocationReducer
});

export default reducers;