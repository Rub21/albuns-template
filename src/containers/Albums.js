import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import { setAlbums, clearAlbums } from '../initializers/actions';
import AlbumsList from '../components/AlbumsList';

class Albums extends Component {
  componentDidMount() {
    if (process.env.NODE_ENV == 'production') {
      this.loadPhotos();
    } else {
      /**importar dinamicamente modulos */
      import('../data/albums').then(module => {
        console.log(module.default.albums);
        this.props.setAlbums(module.default.albums);
      });
    }
  }
  loadPhotos() {
    axios({
      url: 'https://photoslibrary.googleapis.com/v1/albums',
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.props.token}`
      }
    })
      .then(albums => {
        this.props.setAlbums(albums.data.albums);
      })
      .catch(console.log);
  }
  render() {
    return <AlbumsList albums={this.props.albums} />;
  }
}

const mapStateToProps = state => ({
  albums: state.albums,
  token: state.token
});

const mapDispatchToProps = {
  setAlbums,
  clearAlbums
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Albums);
