import {InterviewsState} from "../application-state";
import {InterviewActionTypes} from "./interview.actions";

const initialState: InterviewsState = {
  interviewsList: [],
  loading: false,
  error: null
};

export function interviewReducer(state = initialState, action: any) {
  switch (action.type) {
    case InterviewActionTypes.LOAD_INTERVIEWS_START: {
      return {...state, ...{loading: true}}
    }
    case InterviewActionTypes.LOAD_INTERVIEWS_SUCCESS: {
      return {...state, ...{loading: false, interviewsList: action.payload}}
    }
    case InterviewActionTypes.LOAD_INTERVIEWS_ERROR: {
      return {...state, ...{loading: false}, ...action.error}
    }
    case InterviewActionTypes.CHANGE_SCORE_START: {
      return {...state, ...{loading: true}}
    }
    case InterviewActionTypes.CHANGE_SCORE_SUCCESS: {
      return {...state, ...{loading: false}}
    }
    case InterviewActionTypes.CHANGE_SCORE_ERROR: {
      return {...state, ...{loading: false}, ...action.error}
    }
    default:
      return state;
  }
}