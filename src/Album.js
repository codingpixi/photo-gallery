import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Album = ({match}) => (
  <div className="container">
    <h2>{match.params.albumId}</h2>



    <div className="row">
      <div className="col s2 leftColumn" >
        <Link to="/Photo/1">Each Photo</Link>
        <ul className="nav">
          <li>album 1</li>
          <li>album 2</li>
          <li>album 3</li>
          <li>album 4</li>
          <li>album 5</li>
          <li>album 6</li>
        </ul>
      </div>

    </div>

  </div>

)
export default Album
