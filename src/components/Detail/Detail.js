/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from "react";
import Map from "../Map/Map";

import "./Detail.css";

export default class Detail extends Component {
  render() {
    return (
      <div className="popup" id={this.props.id}>
        <a href="#!" className="popup-overlay"></a>
        <div className="popup-dialog">
          <div className="popup-content">
            <div className="image-content">
              {/* Popup image content */}
              <img className="image" src={this.props.smallImage} alt="Img" />
            </div>

            {/* User information and download - name, username and download */}
            <div className="user-and-download">
              <div className="user-info">
                <div className="user-image-wrapper">
                  <a
                    href={"https://unsplash.com/@" + this.props.user.username}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="user-image"
                      src={this.props.user.image}
                      alt="User Img"
                    />
                  </a>
                </div>
                <div className="user-name-wrapper">
                  <p className="user-name">{this.props.user.name}</p>
                  <a
                    href={"https://unsplash.com/@" + this.props.user.username}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="user-username">@{this.props.user.username}</p>
                  </a>
                </div>
              </div>
              <div className="download-button">
                <span>
                  <a className="download" href={this.props.rawImage} download />
                  <p className="download-text">Download</p>
                </span>
              </div>
            </div>

            {/* Google map at the bottom of the popup screen */}
            <div className="map">
              {this.props.location &&
                this.props.location.latitude &&
                this.props.location.longitude && (
                  <Map
                    className="gmap"
                    lat={this.props.location.latitude}
                    lng={this.props.location.longitude}
                  />
                )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
