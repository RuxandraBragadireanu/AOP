export enum ProfileActionTypes {
  LOGIN_START = "[PROFILE]LOGIN_START",
  LOGIN_SUCCESS = "[PROFILE]LOGIN_SUCCESS",
  LOGIN_ERROR = "[PROFILE]LOGIN_ERROR",
  REGISTER_START = "[PROFILE]REGISTER_START",
  REGISTER_SUCCESS = "[PROFILE]REGISTER_SUCCESS",
  REGISTER_ERROR = "[PROFILE]REGISTER_ERROR",
  LOGOUT_START = '[PROFILE]LOGOUT_START',
  LOGOUT_SUCCESS = '[PROFILE]LOGOUT_SUCCESS',
}

export class ProfileActions {
  static loginStart(email: string, password: string) {
    return {
      type: ProfileActionTypes.LOGIN_START,
      payload: {
        username: email,
        password
      }
    }
  }

  static loginSuccess(payload) {
    return {
      type: ProfileActionTypes.LOGIN_SUCCESS,
      payload
    }
  }

  static loginError(error) {
    return {
      type: ProfileActionTypes.LOGIN_ERROR,
      error
    }
  }

  static logout() {
    return {
      type: ProfileActionTypes.LOGOUT_START
    }
  }

  static logoutSuccess() {
    return {
      type: ProfileActionTypes.LOGOUT_SUCCESS
    }
  }

  static registerStart(email: string, password: string, matchingPassword: string) {
    return {
      type: ProfileActionTypes.REGISTER_START,
      payload: {
        email,
        password,
        matchingPassword
      }
    }
  }

  static registerSuccess(payload) {
    return {
      type: ProfileActionTypes.REGISTER_SUCCESS,
      payload
    }
  }

  static registerError(error) {
    return {
      type: ProfileActionTypes.REGISTER_ERROR,
      error
    }
  }
}