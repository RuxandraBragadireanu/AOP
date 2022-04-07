import * as React from 'react';
import {connect} from "react-redux";
import {Button, LinearProgress} from '@material-ui/core';
import AccesibilityIcon from '@material-ui/icons/AccessibilityOutlined';
import { ApplicationState } from '../../store/application-state';
import { Link } from "react-router-dom";
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {ProfileActions} from "../../store/profile/profile.actions";
import {ApplicationRoutes} from "../../Routes";

interface LoginState {
  email: string,
  password: string,
  isTouched: boolean;
}

interface LoginProps {
  login: (userName: string, password: string) => void;
  loading: boolean;
  badCredentials: boolean,
}

class LoginContainer extends React.Component<LoginProps, LoginState> {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isTouched: false
    }
  }

  login = (userName: string, password: string) => {
    console.log(`Logging user: ${userName} ...`);
    this.setState({
      isTouched: true
    });
    this.props.login(userName, password);
  };
  
  changeEmail = (event: any) => {
    this.setState({
      email: event.target.value,
      isTouched: false
    })
  };

  changePassword = (event: any) => {
    this.setState({
      password: event.target.value,
      isTouched: false
    })
  };

  render() {
    return(
      <div className="centered-box-container">
        {this.props.loading && <LinearProgress variant="indeterminate"/>}
        <div className="padding-40">
          <ValidatorForm onSubmit={(event) => {
                           event.preventDefault();
                           return this.login(this.state.email, this.state.password);
                         }}>
            <div style={{alignSelf: 'center'}}>
              <AccesibilityIcon style={{marginLeft: '48%'}}/>
            </div>
            <h1 style={{textAlign: 'center'}}>
              Sign in
            </h1>
            <h3 style={{textAlign: 'center', color: 'gray'}}>
              Or <Link to={ApplicationRoutes.SIGN_UP}><u><b>register</b></u></Link> if you don't have an account.
            </h3>
            <div>
              <TextValidator
                name="email"
                placeholder="Email"
                variant="outlined"
                value={this.state.email}
                margin="normal"
                onChange={this.changeEmail}
                className="width-100"
                validators={['required']}
                errorMessages={['This field is required']}
              />
            </div>
            <div style={{width: '100%'}}>
              <TextValidator
                name="password"
                placeholder="Password"
                variant="outlined"
                value={this.state.password}
                margin="normal"
                onChange={this.changePassword}
                type="password"
                className="width-100"
                validators={['required']}
                errorMessages={['This field is required']}
              />
            </div>
            <div>
              <Button type="submit"
                      variant='contained'
                      className="width-100"
                      style={{marginTop: 16}}>
                Log in
              </Button>
            </div>
            <div style={{marginTop: 20, textAlign: 'center'}}>
              {this.props.badCredentials && this.state.isTouched && 'Wrong username or password.'}
            </div>
          </ValidatorForm>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state : ApplicationState) => {
  return {
    loading: state.profile.loading,
    badCredentials: state.profile.error
  }
};

const mapDispatchToProps = dispatch => {
  return {
    login: (userName: string, password: string) => dispatch(ProfileActions.loginStart(userName, password))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

