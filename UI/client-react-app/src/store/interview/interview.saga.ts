import {all, call, delay, put, takeEvery} from "redux-saga/effects";
import {InterviewActions, InterviewActionTypes} from "./interview.actions";
import axios from 'axios';
import history from "../../core/history";
import {ApplicationRoutes} from "../../Routes";

export function* interviewSaga() {
  yield all([
    takeEvery(InterviewActionTypes.LOAD_INTERVIEWS_START, loadInterviews),
    takeEvery(InterviewActionTypes.CHANGE_SCORE_START, changeScore)
  ])
}

function* loadInterviews() {
  try {
    const {data} = yield call(axios.get, '/interview');
    yield delay(1000);

    yield put(InterviewActions.loadInterviewsSuccess(data));
  } catch (error) {
    yield put(InterviewActions.loadInterviewsError(error));
  }
}

function* changeScore(action) {
  try {
    yield call(axios.put, '/interview', {
      id: action.payload.id,
      score: action.payload.newScore,
    });
    yield delay(1000);
    yield put(InterviewActions.changeScoreSuccess());
    history.push(ApplicationRoutes.INTERVIEWS_LIST);
  } catch (error) {
    yield put(InterviewActions.changeScoreError(error));
  }
}