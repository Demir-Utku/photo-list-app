import React, { Component } from "react";

import ImageList from "../ImageList/ImageList";
import NoResponse from "../NoResponse/NoResponse";
import Pagination from "../Pagination/Pagination";

import "./Content.css";

export default class Content extends Component {
  render() {
    return (
      <div style={{ display: this.props.req_made }} className="Content">
        {/* If there is any data to display, display ImageList and Pagination components */}
        {/* If there is no data to display, display NoResponse component */}
        {this.props.data !== null &&
        this.props.data.length !== 0 &&
        this.props.data.total !== 0 ? (
          <ImageList data={this.props.data} />
        ) : (
          <NoResponse />
        )}
        {this.props.data !== null &&
        this.props.data.length !== 0 &&
        this.props.data.total !== 0 ? (
          <Pagination
            pagination={{
              currentPage: this.props.currentPage,
              totalPages: this.props.data.totalPages,
            }}
            onPrevClick={this.props.onPrevClick}
            onNextClick={this.props.onNextClick}
          />
        ) : (
          <NoResponse />
        )}
      </div>
    );
  }
}
