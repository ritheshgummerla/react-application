import {combineReducers } from "redux";
import memberReducer from "./memberReducer";
import loginReducer from "./loginReducer";
import themeReducer from "./themeReducer";
// import providerReducer from "./providerReducer"

const rootReducer = combineReducers({
    memberReducer,
    loginReducer,
    themeReducer
    // providerReducer:providerReducer
  });

  export default rootReducer;

