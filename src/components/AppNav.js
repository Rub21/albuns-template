import React, { Component } from 'react';
import { AppBar, Toolbar, withStyles } from '@material-ui/core';
import Login from '../containers/Login';
import Typography from '@material-ui/core/Typography';
class AppNav extends Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar className={this.props.classes.nav}>
            <Typography
              variant="h5"
              component="h1"
              className={this.props.classes.grow}
            >
              Albuns
            </Typography>
            <Login />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default withStyles({
  grow: { flexGrow: 1, textAlign: 'left' },
  nav: { color: 'white' }
})(AppNav);
