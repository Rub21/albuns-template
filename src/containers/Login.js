import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button, Avatar, withStyles } from '@material-ui/core';
import firebase from '../initializers/firebase';
import IconButton from '@material-ui/core/IconButton';
import ExitToApp from '@material-ui/icons/ExitToApp';
// https://material.io/tools/icons/?style=baseline
import { saveToken, clearToken } from '../initializers/actions';
import AuthElements from '../components/AuthElements';
class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    console.log('------------------------------------');
    console.log(this.props.token);
    console.log('------------------------------------');
  }

  login() {
    let provider = new firebase.auth.GoogleAuthProvider();

    provider.addScope('https://www.googleapis.com/auth/photoslibrary.readonly');
    // https://www.googleapis.com/auth/photoslibrary
    // https://www.googleapis.com/auth/photoslibrary.readonly.appcreateddata
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        console.log(result);
        let token = result.credential.accessToken;
        this.props.saveToken(token);
      });
  }

  logout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.props.clearToken();
      });
  }

  render() {
    return (
      <AuthElements
        login={this.login}
        logout={this.logout}
        token={this.props.token}
        user={this.props.user}
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    token: state.token,
    user: state.user
  };
};

/**
 * Si se utiliza mapDispatchToProps, ya nose se usualizara this.store.dispatch
 */
const mapDispatchToProps = {
  saveToken,
  clearToken
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
