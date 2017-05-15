import React, { Component } from 'react';
import albumArray from './data';
import {
  Link
} from 'react-router-dom'




class Album extends Component {
  render(){
    let index = parseInt(this.props.match.params.albumId);
    console.log(albumArray[index].album);
    return(
      <div className="container">
        <h2>{index}</h2>

        <div className="row">
          <div className="col s2 leftColumn" >
            <Link to="/Photo/1">Each Photo</Link>
            <ul className="nav">
              <li>Travel</li>
              <li>album 2</li>
              <li>album 3</li>
              <li>album 4</li>
              <li>album 5</li>
              <li>album 6</li>
            </ul>
          </div>

          <div>
            <div className="card-image">
              {albumArray[index].album.map((photo, index) => {
                return <Link
                  key={index}
                  to={`/album/${index}`}><img src={photo.img} width="400px" /></Link>
                })}
                }
            </div>

            {/* <div className="card-content">
                </div> */}
            <div className="card-action">
            <Link to="/Album/travel">Album link</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Album;
