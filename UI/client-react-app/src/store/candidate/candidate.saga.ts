import {CandidateActions, CandidateActionTypes} from "./candidate.actions";
import {all, takeEvery, put, call, delay} from "redux-saga/effects";
import {ApplicationRoutes} from "../../Routes";
import history from "../../core/history";
import axios from "axios";

export function* candidateSaga() {
  yield all([
    takeEvery(CandidateActionTypes.GET_INTERVIEW_DETAILS_START, setCandidateInterviewDetails),
    takeEvery(CandidateActionTypes.LOAD_CANDIDATE_INFO_START, loadCandidateInfo)
  ])
}

function* setCandidateInterviewDetails(action) {
  try {
    const {data} = yield call(axios.get, `/interview/email/?email=${action.payload.email}`);
    yield delay(1000);

    if (data.length === 0) {
      yield put(CandidateActions.getInterviewDetailsError('No data found!'));
    } else {
      const lastInterview = data[data.length - 1];
      const {data: candidateData} = yield call(axios.get, `/candidate/${lastInterview.candidateId}`);
      const {data: interviewerData} = yield call(axios.get, `/interviewer/getInterviewer/${lastInterview.interviewerId}`);

      const interviewDetails = {
        room: lastInterview.reservedRoom || '',
        interviewType: lastInterview.type || '',
        interviewer: (interviewerData.firstName || '') + ' ' + (interviewerData.lastName || ''),
        email: candidateData.email || '',
        firstName: candidateData.firstName || '',
        lastName: candidateData.lastName || ''
      };
      yield put(CandidateActions.getInterviewDetailsSuccess(interviewDetails));
      history.push(ApplicationRoutes.CANDIDATE_INTERVIEW_DETAILS);
    }
  } catch (error) {
    yield put(CandidateActions.getInterviewDetailsError(error));
  }
}

function* loadCandidateInfo(action) {
  try {
    const {data} = yield call(axios.get, `/candidate/${action.payload.id}`);
    yield delay(1000);
    yield put(CandidateActions.loadCandidateInfoSuccess(data));
  } catch (error) {
    yield put(CandidateActions.loadCandidateInfoError(error));
  }
}