import React, { Component } from "react";

import "./Pagination.css";

export default class Pagination extends Component {
  createButtons = () => {
    // Initially, next and previous buttons are not disabled
    let isNextDisabled = false;
    let isPrevDisabled = false;

    // If current page is the last page, disable the next button
    if (
      this.props.pagination.currentPage === this.props.pagination.totalPages
    ) {
      isNextDisabled = true;
    }
    // If the current page is the first page, disable the previous button
    if (this.props.pagination.currentPage === 1) {
      isPrevDisabled = true;
    }

    return (
      <>
        {/* onPrevClick and onNextClick will be determined in Content component */}
        <button
          className="button-prev"
          disabled={isPrevDisabled}
          onClick={() => this.props.onPrevClick()}
        >
          Previous
        </button>
        <button
          className="button-next"
          disabled={isNextDisabled}
          onClick={() => this.props.onNextClick()}
        >
          Next
        </button>
      </>
    );
  };

  render() {
    return (
      <div className={"pagination-wrapper"}>
        {/* returns createButtons method defined above */}
        {this.createButtons()}
      </div>
    );
  }
}
