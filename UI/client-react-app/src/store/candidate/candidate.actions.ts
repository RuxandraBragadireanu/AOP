export enum CandidateActionTypes {
  GET_INTERVIEW_DETAILS_START = "[CANDIDATE]GET_INTERVIEW_DETAILS_START",
  GET_INTERVIEW_DETAILS_SUCCESS = "[CANDIDATE]GET_INTERVIEW_DETAILS_SUCCESS",
  GET_INTERVIEW_DETAILS_ERROR = "[CANDIDATE]GET_INTERVIEW_DETAILS_ERROR",
  LOAD_CANDIDATE_INFO_START = "[CANDIDATE]LOAD_CANDIDATE_INFO_START",
  LOAD_CANDIDATE_INFO_SUCCESS = "[CANDIDATE]LOAD_CANDIDATE_INFO_SUCCESS",
  LOAD_CANDIDATE_INFO_ERROR = "[CANDIDATE]LOAD_CANDIDATE_INFO_ERROR"
}

export class CandidateActions {
  static getInterviewDetailsStart(email: string) {
    return {
      type: CandidateActionTypes.GET_INTERVIEW_DETAILS_START,
      payload: {
        email
      }
    }
  }

  static getInterviewDetailsSuccess(payload) {
    return {
      type: CandidateActionTypes.GET_INTERVIEW_DETAILS_SUCCESS,
      payload
    }
  }

  static getInterviewDetailsError(error) {
    return {
      type: CandidateActionTypes.GET_INTERVIEW_DETAILS_ERROR,
      error
    }
  }

  static loadCandidateInfo(id: string) {
    return {
      type: CandidateActionTypes.LOAD_CANDIDATE_INFO_START,
      payload: {
        id
      }
    }
  }

  static loadCandidateInfoSuccess(payload) {
    return {
      type: CandidateActionTypes.LOAD_CANDIDATE_INFO_SUCCESS,
      payload
    }
  }

  static loadCandidateInfoError(error) {
    return {
      type: CandidateActionTypes.LOAD_CANDIDATE_INFO_ERROR,
      error
    }
  }
}