import { all } from 'redux-saga/effects'
import {candidateSaga} from "./candidate/candidate.saga";
import {profileSaga} from "./profile/profile.saga";
import {interviewSaga} from "./interview/interview.saga";

export function* rootSaga() {
  try {
    yield all([
      candidateSaga(),
      profileSaga(),
      interviewSaga()
    ])
  } catch (e) {
    console.log('Something wrong happened in the sagas...');
  }
}