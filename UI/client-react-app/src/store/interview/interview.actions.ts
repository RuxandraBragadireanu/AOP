export enum InterviewActionTypes {
  LOAD_INTERVIEWS_START = "[INTERVIEW]LOAD_INTERVIEWS_START",
  LOAD_INTERVIEWS_SUCCESS = "[INTERVIEW]LOAD_INTERVIEWS_SUCCESS",
  LOAD_INTERVIEWS_ERROR = "[INTERVIEW]LOAD_INTERVIEWS_ERROR",
  CHANGE_SCORE_START = "[INTERVIEW]CHANGE_SCORE_START",
  CHANGE_SCORE_SUCCESS = "[INTERVIEW]CHANGE_SCORE_SUCCESS",
  CHANGE_SCORE_ERROR = "[INTERVIEW]CHANGE_SCORE_ERROR",
}

export class InterviewActions {
  static loadInterviews() {
    return {
      type: InterviewActionTypes.LOAD_INTERVIEWS_START
    }
  }

  static loadInterviewsSuccess(payload) {
    return {
      type: InterviewActionTypes.LOAD_INTERVIEWS_SUCCESS,
      payload
    }
  }

  static loadInterviewsError(error) {
    return {
      type: InterviewActionTypes.LOAD_INTERVIEWS_ERROR,
      error
    }
  }

  static changeScore(id: string, newScore: number) {
    return {
      type: InterviewActionTypes.CHANGE_SCORE_START,
      payload: {
        id,
        newScore
      }
    }
  }

  static changeScoreSuccess() {
    return {
      type: InterviewActionTypes.CHANGE_SCORE_SUCCESS,
    }
  }

  static changeScoreError(error) {
    return {
      type: InterviewActionTypes.CHANGE_SCORE_ERROR,
      error
    }
  }

}