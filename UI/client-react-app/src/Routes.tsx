import * as React from 'react';
import { Route } from "react-router-dom";
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import { WelcomePage } from "./components/WelcomePage/WelcomePage";
import CandidatePage from "./components/CandidatePage/CandidatePage";
import CandidateInterviewDetails from "./components/CandidateInterviewDetails/CandidateInterviewDetails";
import Profile from "./components/Profile/Profile";
import {PrivateRoute} from "./core/private-route";
import {ApplicationState} from "./store/application-state";
import {connect} from "react-redux";
import InterviewsList from "./components/InterviewsList/InterviewsList";
import CandidateInfo from "./components/CandidateInfo/CandidateInfo";
import ChangeInterviewScore from "./components/ChangeInterviewScore/ChangeInterviewScore";

export enum ApplicationRoutes {
  ROOT = '/',
  CANDIDATE_PAGE = '/candidate-page',
  CANDIDATE_INTERVIEW_DETAILS = '/candidate-interview-details',
  LOGIN = '/login',
  SIGN_UP = '/sign-up',
  PROFILE = '/profile',
  INTERVIEWS_LIST = '/interviews-list',
  CANDIDATE_INFO = '/candidate-info',
  CHANGE_INTERVIEW_SCORE = '/change-interview-score',
}

class Routes extends React.Component<{authed?: boolean}, {}> {
  render() {
    const authed = this.props.authed;
    return (
      <div style={{height: 'calc(100% - 64px)', display: 'flex'}}>
        <Route path={ApplicationRoutes.ROOT} exact strict component={WelcomePage}/>
        <Route path={ApplicationRoutes.CANDIDATE_PAGE} exact strict component={CandidatePage}/>
        <Route path={ApplicationRoutes.CANDIDATE_INTERVIEW_DETAILS} exact strict component={CandidateInterviewDetails}/>
        <Route path={ApplicationRoutes.LOGIN} exact strict component={Login}/>
        <Route path={ApplicationRoutes.SIGN_UP} exact strict component={SignUp}/>
        <PrivateRoute path={ApplicationRoutes.PROFILE} authed={authed} exact strict component={Profile}/>
        <PrivateRoute path={ApplicationRoutes.INTERVIEWS_LIST} authed={authed} exact strict component={InterviewsList}/>
        <PrivateRoute path={ApplicationRoutes.CANDIDATE_INFO + '/:id'} authed={authed} exact strict component={CandidateInfo}/>
        <PrivateRoute path={ApplicationRoutes.CHANGE_INTERVIEW_SCORE + '/:id'} authed={authed} exact strict component={ChangeInterviewScore}/>
      </div>
    )
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  authed: state.profile.email !== ''
});

export default connect(mapStateToProps, null)(Routes);