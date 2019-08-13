import { takeEvery, call, put, all } from "redux-saga/effects";
import API from "../api";
import constants from "../constants";

function* watchLoginUser(model) {
  const { payload } = model;
   try {
    const response = yield call(API.loginUser(payload));
    if (response) {
      yield put({
        type: constants.LOGIN_USER_SUCCESS,
        payload:response.data
      });
    }
  } catch (error) {
    // yield put({
    //   type: CREATE_BLA_BLA_FAILURE,
    //   payload: 'failed to create bla-bla'
    // });
  }
}


function* watchAppLoad() {
    yield all([takeEvery(constants.LOGIN_USER_REQUEST, watchLoginUser)]);
}

export default [watchAppLoad];