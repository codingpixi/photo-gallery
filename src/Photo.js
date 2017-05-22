import React, { Component } from 'react';
import albumArray from './data';
import {
  Link
} from 'react-router-dom';
import { browserHistory } from 'react-router';



class Photo extends Component {
  render() {
    let albumId = parseInt(this.props.match.params.albumId);
    let pic = parseInt(this.props.match.params.photoId);
    let data = albumArray[albumId].album[pic];
    console.log(data);


    return (
      <div>
        <Link to={`/Album/${albumId}`}>Back</Link>
        {/* <Link to="{browserHistory.goBack}">Back
        </Link> */}
        <p>hello</p>
        <img src={albumArray[albumId].album[pic].img} width="750px" />

      </div>
    )
  }
}
 export default Photo;
