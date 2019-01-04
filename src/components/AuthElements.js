/**This a fool component */
import React, { Component } from 'react';
import { Button, Avatar, withStyles } from '@material-ui/core';
import firebase from '../initializers/firebase';
import IconButton from '@material-ui/core/IconButton';
import ExitToApp from '@material-ui/icons/ExitToApp';
// https://material.io/tools/icons/?style=baseline

const AuthElements = function(props) {
  const logInButton = () => {
    if (props.user)
      return [
        <Avatar src={props.user.providerData[0].photoURL} />,
        <IconButton color="inherit" onClick={props.logout}>
          <ExitToApp />
        </IconButton>
      ];
    return (
      <Button variant="contained" onClick={props.login}>
        Login with google
      </Button>
    );
  };
  return <div className={props.classes.container}>{logInButton()}</div>;
};

export default withStyles({
  container: {
    display: 'flex',
    flexDirection: 'row'
  }
})(AuthElements);
