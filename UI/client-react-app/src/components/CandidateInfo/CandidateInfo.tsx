import * as React from 'react';
import {connect} from "react-redux";
import {ApplicationState, CandidateInterviewDetails} from '../../store/application-state';
import {LinearProgress, List, ListItem, ListItemText} from "@material-ui/core";
import {CandidateActions} from "../../store/candidate/candidate.actions";

interface CandidateInterviewProps {
  candidate: CandidateInterviewDetails;
  loadCandidateInfo: (id: string) => void;
  match: {
    params: {
      id: string;
    }
  }
}

class CandidateInfo extends React.Component<CandidateInterviewProps, {}> {

  componentDidMount(): void {
    this.props.loadCandidateInfo(this.props.match.params.id);
  }

  render() {
    const {email, lastName, firstName, loading, phone} = this.props.candidate;

    return (
      <div className="centered-box-container">
        {loading && <LinearProgress variant="indeterminate"/>}
        {!loading && (
          <div className="padding-40">
            <div className="login-container">
              <div style={{textAlign: 'center'}}>
                <h1>{firstName}'s profile</h1>

                <List component="nav">
                  <ListItem>
                    <ListItemText primary={`First name: ${firstName}`} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={`Last name: ${lastName}`} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={`Email: ${email}`} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={`Phone: ${phone}`} />
                  </ListItem>
                </List>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state : ApplicationState) => {
  return {
    candidate: state.candidate
  }
};

const mapDispatchToProps = dispatch => {
  return {
    loadCandidateInfo: (id: string) => {
      dispatch(CandidateActions.loadCandidateInfo(id))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CandidateInfo);

