import * as React from 'react';
import {connect} from "react-redux";
import {ApplicationState, Interview} from '../../store/application-state';
import {
  Button,
  FormControl,
  LinearProgress,
  ListItem,
  ListItemText,
  MenuItem,
  Select
} from "@material-ui/core";
import {InterviewActions} from "../../store/interview/interview.actions";
import {ApplicationRoutes} from "../../Routes";
import history from "../../core/history";

interface ChangeInterviewScoreProps {
  interviews: Array<Interview>;
  changeInterviewScore: (id: string, newScore: number) => void;
  loading: boolean;
  match: {
    params: {
      id: string;
    }
  }
}

interface ChangeInterviewScoreState {
  newScore: number | any;
  interview: Interview | any;
}

class ChangeInterviewScore extends React.Component<ChangeInterviewScoreProps, ChangeInterviewScoreState> {

  constructor(props) {
    super(props);
    const interviewId = this.props.match.params.id;

    const interview = this.props.interviews
      .find(interview => `${interview.id}` === `${interviewId}`);

    if (!interview) {
      history.push(ApplicationRoutes.INTERVIEWS_LIST);
    }

    this.state = {
      newScore: interview && interview.score,
      interview: interview || null
    }
  }


  render() {
    const {interview, newScore} = this.state;

    return interview && (
      <div className="centered-box-container">
        {this.props.loading && <LinearProgress variant="indeterminate"/>}
        <div className="padding-40">
          <ListItem>
            <ListItemText primary={`New score: `} style={{marginBottom: 24}}/>
            <FormControl>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={newScore}
                onChange={(ev) => {
                  this.setState({
                    newScore: ev.target.value
                  })
                }}>
                {
                  Array.from(Array(11).keys())
                       .filter(e => e > 0)
                       .map(index => {
                            return <MenuItem value={index} key={'menu-item-'+index}>{index}</MenuItem>
                          })
                }
              </Select>
            </FormControl>
          </ListItem>

          <Button onClick={() => {
                    this.props.changeInterviewScore(
                      this.state.interview.id,
                      this.state.newScore
                    );
                  }}
                  variant="contained"
                  style={{float: 'right', marginBottom: 24}}>
            Save changes
          </Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state : ApplicationState) => {
  return {
    interviews: state.interviews.interviewsList,
    loading: state.interviews.loading
  }
};

const mapDispatchToProps = dispatch => {
  return {
    changeInterviewScore: (id: string, newScore: number) => {
      dispatch(InterviewActions.changeScore(id, newScore))
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeInterviewScore);

