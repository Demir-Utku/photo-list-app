import React, { Component } from 'react';
import axios from 'axios';

import './View.css';

import Detail from '../Detail/Detail';
import Error from '../Error/Error';

export default class View extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  loadDetail = (id) => {
    axios.get('https://api.unsplash.com/photos/' + id + '?client_id=oGAB55r3jWyuk5FXcJEV2kbB2DBvVmPfHowiFHHoTn4')
    .then(response => {
      let location = false;
      if (!!response.data.location) {
        if (!!response.data.location.position) {
          location = response.data.location.position;
        }
      }
      this.setState({
        rawImage: response.data.urls.raw,
        smallImage: response.data.urls.regular,
        user: {
          name: response.data.user.name,
          username: response.data.user.username,
          image: response.data.user.profile_image.medium,
        },
        location: location,
        searched: true,
      });
    }).catch(e => {
      console.error(e);
      <Error /> // Design for an error state if the request is failed
    });
  }

  getImage = () => {
    return(
      <>
        <a href={`#${this.props.view.id}`} onLoad={() => this.loadDetail(this.props.view.id)}>
          <img src={this.props.view.url} style={{ height: `${20.5 * (this.props.view.height / this.props.view.width)}vw` }} key={this.props.view.url}/>
        </a>
        {this.state.searched && 
          <Detail location={this.state.location} id={this.props.view.id} smallImage={this.state.smallImage} rawImage={this.state.rawImage} user={this.state.user} />
        }
      </>      
    );
  }
  
  render() {
    return(
      <div className="image-wrapper">
        {this.getImage()}
      </div>
    );
  }
}
