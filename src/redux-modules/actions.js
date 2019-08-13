import constants from "./constants";

const onLoadMemberData = () => ({
  type: constants.FETCH_MEMBER_REQUEST
});

const login = credentials => ({
  type: constants.LOGIN_USER_REQUEST,
  payload: credentials
});

const userLoginStatus = isLoggedIn =>({
  type:"IS_LOGGED_IN",
  payload:isLoggedIn
});

export { onLoadMemberData, login, userLoginStatus };
