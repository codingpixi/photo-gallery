import React, { Component } from 'react';
import albumArray from './data';
import {
  Link,
  NavLink
} from 'react-router-dom';
import { browserHistory } from 'react-router';



class Album extends Component {
  render(){
    let albumId = parseInt(this.props.match.params.albumId);
    console.log(albumArray[albumId].album);
    return(
      <div className="container">
        {/* <h2>{index}</h2> */}

        <div className="row">
          <div className="col s12 m4 l3" >
            {/* <Link to="/Photo/1">Each Photo</Link> */}
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/Album/0"
              activeClassName="selected">Trees
            </NavLink>
            <NavLink
              to="/Album/1">Cameras
              </NavLink>
            <NavLink
              to="/Album/2">Travel
            </NavLink>
            <NavLink to="/Album/3">Birds
          </NavLink>
          </div>

          <div className="col s12 m8 l9">
            <div className = "row">
              <div className = "col s12 m8 l9">
                <div className="card-image">
                  {albumArray[albumId].album.map((photo, index) => {
                    return <Link
                      key={index}
                      to={`/Album/${albumId}/Photo/${index}`}><img src={photo.img} width="400px" /></Link>
                      console.log(albumArray);
                    })}
                    }
                </div>
              </div>
            </div>
            {/* <div className="card-content">
                </div> */}
            {/* <div className="card-action">
            <Link to="/Album/travel">Album link</Link>
            </div> */}
          </div>


        </div>
      </div>
    )
  }
}
export default Album;
