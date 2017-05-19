import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


  class Navigation extends Component {
    render() {
      return (
        <section>
          <Link
            to="/">Home</Link>
          <Link
            to="{`/Album/${albumId}/Photo/${index}`}">${this}</Link>
        </section>
      )
    }
  }


export default Navigation

// ={`/Album/${albumId}/Photo/${index}`}>
//
// <div className="row">
//   <div className="col s2 leftColumn" >
//     <Link to="/Photo/1">Each Photo</Link>
//     <ul className="nav">
//       <li>Travel</li>
//       <li>album 2</li>
//       <li>album 3</li>
//       <li>album 4</li>
//       <li>album 5</li>
//       <li>album 6</li>
//     </ul>
//   </div>
