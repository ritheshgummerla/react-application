import { takeEvery, call, put, all } from "redux-saga/effects";
import API from "../api";
import constants from "../constants";

function* watchFetchMember() {
   try {
    const response = yield call(API.findMember);
    if (response) {
      yield put({
        type: constants.FETCH_MEMBER_SUCCESS,
        payload:response
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
    yield all([takeEvery(constants.FETCH_MEMBER_REQUEST, watchFetchMember)]);
}

export default [watchAppLoad];