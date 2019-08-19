import { put, takeLatest } from 'redux-saga/effects'
import { REQUEST_HELLO_WORLD, receiveHelloWorld } from './actions';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* helloWorld(action) {
   try {
       //do api call
      //const user = yield call(Api.fetchUser, action.payload.userId);
      yield put(receiveHelloWorld("Hello World from redux saga!"));
   } catch (e) {
      yield put({
          type: "USER_FETCH_FAILED", 
          message: e.message
        });
   }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
  yield takeLatest(REQUEST_HELLO_WORLD, helloWorld);
}

export default mySaga;