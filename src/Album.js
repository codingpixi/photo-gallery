import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Album extends Component {
  render(){
    return(
      <div className="container">
        <h2>{this.props.match.params.albumId}</h2>

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

            <div className="row">

              <div className="col s4">
                <div className="card">
                  <div className="card-image">
                    {console.log(this.props.albumSet.filter() => travel)}
                    {/* {console.log(this.props.albumSet[3].water)} */}
                    {/* {this.props.albumSet[0].travel.map(album => {
                      return <img src={album.img} />
                    }) */}
                  }
                  </div>

                  <div className="card-content">
                  </div>
                  <div className="card-action">
                    <Link to="/Album/travel">Album link</Link>
                  </div>
                </div>
              </div>
            </div>

          </div>

          </div>

        </div>
    )
  }


}
export default Album
