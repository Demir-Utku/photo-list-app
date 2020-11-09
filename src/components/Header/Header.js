/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable prefer-template */
/* eslint-disable quotes */
import React, { Component } from 'react';
import List from '../List/List';

import Logo from '../../images/logo.png';

import './Header.css';

export default class Header extends Component {
  onButtonClick = (e) => {
    // controls the query field
    // if it is empty, it'll give an alert
    if(this.props.formdata.query.length === 0) {
      alert("Please enter a query")
    }
    // if query is given, button click event is occurred
    else {
      this.props.onButtonClick();
    }
  }

  headerForm = () => {
    return(
      <div className={`search-form ${this.props.inline ? this.props.inline+"-search-form" : ""}`}>
        {/* Query text input */}
        <input 
          className={`input input-query ${this.props.inline ? this.props.inline+"-input-query" : ""}`} 
          type="text" 
          name="query"
          value={this.props.formdata.query}
          onChange={this.props.onInputChange}
          placeholder="Query"
        />

        {/* Collections dropdown taken from List component */}
        <div className={`select-wrapper ${this.props.inline ? this.props.inline+"-select-wrapper" : ""}`}>
          {
            <List 
              ops={this.props.ops} 
              collection={this.props.formdata.collection} 
              collectionId={this.props.formdata.collectionId} 
              itemClicked={this.props.itemClicked}
            />
          }
        </div> 

        {/* Search button */}           
        <button
          className={`input search-button ${this.props.inline ? this.props.inline+"-search-button" : ""}`}
          onClick={this.onButtonClick.bind(this)}  
          type="submit"
        >
          SEARCH
        </button>
      </div> 
    );
  }

  render() {
    // When app starting, display initial header page and when search has been made, display the page that includes images
    return (
      <header className={`header ${this.props.inline ? this.props.inline+"-header" : ""}`}>
        <div className={`header-logo-wrapper ${this.props.inline ? this.props.inline+"-header-logo-wrapper" : ""}`}>
          <div className={`header-logo ${this.props.inline ? this.props.inline+"-header-logo" : ""}`}>
            <img className={`logo ${this.props.inline ? this.props.inline+"-logo" : ""}`} src={Logo} alt="logo"/>
          </div>
          <h1 className={`header-logo-name ${this.props.inline ? this.props.inline+"-header-logo-name" : ""}`}>
            <b>image</b> search
          </h1>
        </div>      
        {this.headerForm()}
      </header>
    );
  }
}
