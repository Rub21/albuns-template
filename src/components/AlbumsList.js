import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AlbumCard from './AlbumCard';
import Grid from '@material-ui/core/Grid';
function AlbumsList(props) {
  console.log('------------------------------------');
  console.log(props.albums);
  console.log('------------------------------------');
  return (
    <Grid container spacing={16} justify="center">
      {props.albums.map((album, index) => {
        return <AlbumCard album={album} key={index} />;
      })}
    </Grid>
  );
}

export default withStyles({})(AlbumsList);
