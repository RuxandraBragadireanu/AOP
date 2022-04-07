import * as React from 'react';
import '../../styles/style.css';
import {connect} from 'react-redux';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {AccountCircle, Home} from '@material-ui/icons';
import {ApplicationState} from '../../store/application-state';
import {palette} from "../../styles/palette";
import {ApplicationRoutes} from "../../Routes";

interface NavBarProps{
  email: string,
  firstName: string;
}

class NavBarContainer extends React.Component<NavBarProps, {}> {
  render() {
    const {email, firstName} = this.props;
    const loginInfo = email ? `Hello, ${firstName}` : <AccountCircle/>;

    return(
      <React.Fragment>
        <AppBar position="static" style={{backgroundColor: palette.customColors.darkRed}}>
          <Toolbar>
            <Link to={email !== '' ? ApplicationRoutes.INTERVIEWS_LIST : ApplicationRoutes.ROOT}
                  style={{width: '5%', display: 'flex', justifyContent: 'center'}}>
              <Home style={{ color: 'white' }}/>
            </Link>
            <Typography variant="h6" style={{width: '90%', display: 'flex', justifyContent: 'center'}}>
              <Link to={email !== '' ? ApplicationRoutes.INTERVIEWS_LIST : ApplicationRoutes.ROOT}
                    style={{color: 'white'}}>
                QA Platform
              </Link>
            </Typography>
            <Link to={email !== '' ? ApplicationRoutes.PROFILE : ApplicationRoutes.LOGIN}
                  style={{width: '10%', display: 'flex', justifyContent: 'center', color: 'white'}}>
              {loginInfo}
            </Link>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state : ApplicationState) => {
  return {
    email: state.profile.email,
    firstName: state.profile.firstName,
  }
};

const mapDispatchToProps = dispatch => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer);
