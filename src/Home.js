import React, { Component } from 'react';
import albumArray from './data';
import {
  Link
} from 'react-router-dom';
import { browserHistory } from 'react-router';

//shortcut when no constructor needed
const Home = () => (

  <div className="Start">

    <div className="container">
      {albumArray.map((album, index) => {
        return <Link
          key={index}
          to={`/album/${index}`}><img src={album.path} width="600px" /></Link>
        })}
    </div>
        {/* <div className="card-action">
          <Link to="/Album/detra">Album link</Link>
        </div> */}
  </div>
)

export default Home
