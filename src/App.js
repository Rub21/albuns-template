import React, { Component } from 'react';
import PropTypes from 'prop-types';

import logo from './logo.svg';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppNav from './components/AppNav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNav />
      </div>
    );
  }
}

// const styles = theme => ({
//   button: {
//     margin: theme.spacing.unit,
//   },
//   input: {
//     display: 'none',
//   },
// });

// App.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles({})(App);
