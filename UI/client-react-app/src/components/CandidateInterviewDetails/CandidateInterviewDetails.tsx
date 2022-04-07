import * as React from 'react';
import {connect} from "react-redux";
import {ApplicationState, CandidateInterviewDetails} from '../../store/application-state';
import {List, ListItem, ListItemText} from "@material-ui/core";
import {ApplicationRoutes} from "../../Routes";
import history from "../../core/history";

interface CandidateInterviewProps {
  interviewDetails: CandidateInterviewDetails
}

class CandidatePage extends React.Component<CandidateInterviewProps, {}> {

  constructor(props) {
    super(props);
    const {email} = this.props.interviewDetails;
    if (!email) {
      history.push(ApplicationRoutes.CANDIDATE_PAGE);
    }
  }

  render() {
    const {room, interviewer, interviewType, email, firstName, lastName} = this.props.interviewDetails;

    return(
      <div className="centered-box-container padding-40" style={{textAlign: 'center'}}>
        <h1>{firstName}'s interview:</h1>

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
            <ListItemText primary={`Room: ${room}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Interviewer: ${interviewer}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Interview Type: ${interviewType}`} />
          </ListItem>
        </List>
      </div>
    )
  }
}

const mapStateToProps = (state : ApplicationState) => {
  return {
    interviewDetails: state.candidate
  }
};

const mapDispatchToProps = dispatch => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CandidatePage);

