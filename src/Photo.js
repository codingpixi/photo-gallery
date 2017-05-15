import React, { Component } from 'react';
import albumArray from './data';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


const Photo = ({match}) => (
  <div>
    <h2>{match.params.photoId}</h2>
  </div>

)
 export default Photo
