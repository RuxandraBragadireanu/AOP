import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {connect} from "react-redux";
import {ApplicationState, Interview} from "../../store/application-state";
import {Dispatch} from "redux";
import {InterviewActions} from "../../store/interview/interview.actions";
import {LinearProgress} from "@material-ui/core";
import moment from 'moment/moment';
import {ApplicationRoutes} from "../../Routes";
import history from "../../core/history";

interface InterviewsListProps {
  loadInterviews: () => void;
  interviews: Array<Interview>;
  loading: boolean;
  error: any;
}

class Interviews extends React.Component<InterviewsListProps, {}> {

  constructor(props) {
    super(props);

    this.goToCandidateInfo = this.goToCandidateInfo.bind(this);
    this.goToChangeInterviewScore = this.goToChangeInterviewScore.bind(this);
  }


  componentDidMount(): void {
    this.props.loadInterviews();
  }

  goToCandidateInfo(candidateId: number) {
    history.push(`${ApplicationRoutes.CANDIDATE_INFO}/${candidateId}`);
  }

  goToChangeInterviewScore(interviewId: number) {
    history.push(`${ApplicationRoutes.CHANGE_INTERVIEW_SCORE}/${interviewId}`);
  }

  render () {
    const {interviews, loading} = this.props;

    return (
      <div>
        <div className="padding-40">
          <TableContainer component={Paper}>
            {loading && <LinearProgress variant="indeterminate"/>}
            <Table style={{minWidth: '95vw'}} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell><span style={{marginLeft: 16}}>Id</span></TableCell>
                  <TableCell align="left"><span style={{marginLeft: 16}}>Candidate</span></TableCell>
                  <TableCell align="left">Interviewer</TableCell>
                  <TableCell align="left">Type</TableCell>
                  <TableCell align="left">Room</TableCell>
                  <TableCell align="left">Date</TableCell>
                  <TableCell align="left">Score</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {interviews.map((interview) => (
                  <TableRow key={interview.id}>
                    <TableCell component="th"
                               scope="row"
                               onClick={() => {
                                 this.goToChangeInterviewScore(interview.id)
                               }}>
                      <span style={{cursor: 'pointer', padding: 16}}>{interview.id}</span>
                    </TableCell>
                    <TableCell align="left"
                               onClick={() => {this.goToCandidateInfo(interview.candidateId)}}>
                      <span style={{cursor: 'pointer', padding: 16}}>{interview.candidateId}</span>
                    </TableCell>
                    <TableCell align="left">
                      {interview.interviewerId}
                    </TableCell>
                    <TableCell align="left">
                      {interview.type}
                    </TableCell>
                    <TableCell align="left">
                      {interview.reservedRoom}
                    </TableCell>
                    <TableCell align="left">
                      {moment(interview.date).format('DD MMM YYYY HH:mm')}
                    </TableCell>
                    <TableCell align="left">
                      {interview.score}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => {
  return {
    interviews: state.interviews.interviewsList,
    loading: state.interviews.loading,
    error: state.interviews.error
  }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    loadInterviews: () => {
      dispatch(InterviewActions.loadInterviews());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Interviews);