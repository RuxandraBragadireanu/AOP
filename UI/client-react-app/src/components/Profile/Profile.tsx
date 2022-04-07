import * as React from 'react';
import {connect} from "react-redux";
import {Button, List, ListItem, ListItemText} from '@material-ui/core';
import {ApplicationState} from '../../store/application-state';
import {ProfileActions} from "../../store/profile/profile.actions";

interface ProfileProps {
  email: string;
  firstName: string;
  lastName: string;
  logout: () => void;
}

class Profile extends React.Component<ProfileProps, {}> {
  logout() {
    this.props.logout();
  }

  render() {
    const {email, firstName, lastName} = this.props;

    const viewProfile = (
      <div style={{textAlign: 'center'}}>
        <div onClick={() => this.logout()} style={{float: 'right',}}>
          <Button type="submit" variant='outlined'>Logout</Button>
        </div>

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
        </List>
      </div>
    );

    return(
      <div className="centered-box-container padding-40">
        <div className="login-container">
            {viewProfile}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state : ApplicationState) => {
  return {
    email: state.profile.email,
    firstName: state.profile.firstName,
    lastName: state.profile.lastName,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(ProfileActions.logout())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

