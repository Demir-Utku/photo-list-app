import React, { Component } from 'react';
import { Gmaps, Marker } from 'react-gmaps';

// Parameters for Google Map Authorization
const params = { v: '3.exp', key: 'AIzaSyAAlkmXHu5GE8EI-sHa1ZeJqgCq8G5uiKo' };

export default class Map extends Component { 
  render() {
    return (
      <div>
        <Gmaps
          /* Width, height, latitude, longitude, zoom and params attributes for Gmaps component */
          width={'100%'}
          height={'15.45vw'}
          lat={this.props.lat}
          lng={this.props.lng}
          zoom={12}
          params={params}>
          <Marker
            // Specifies where the marker will be on
            lat={this.props.lat}
            lng={this.props.lng} />
        </Gmaps>
      </div>
    );
  }
};