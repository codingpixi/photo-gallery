import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Album = ({match}) => (
  <div>
    <h2>{match.params.albumId}</h2>

    <Link to="/Photo/1">Each Photo</Link>

  </div>


)
export default Album
