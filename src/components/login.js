import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import firebase from './../initializers/firebase';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
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
      });
  }

  render() {
    return (
      <div>
        <Button variant="contained" onClick={this.login}>
          Login
        </Button>
      </div>
    );
  }
}
