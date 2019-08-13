import memberSaga from "./memberSaga";
import loginSaga from "./loginSaga"
// import providerSaga from "./providerSaga"
// import ApiErrors from "./ApiErrors";

export default [ ...memberSaga, ...loginSaga];