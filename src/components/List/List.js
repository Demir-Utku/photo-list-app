/* eslint-disable no-useless-concat */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import onClickOutside from "react-onclickoutside";
import Drop from "../../images/collection-downarrow.png";

import "./List.css";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOpen: false, // list is appearing or not
      collection: this.props.collection, // collection name
      collectionId: this.props.collectionId, // collection id
      ops: this.props.ops, // collection list
    };
  }

  // If you click outside of the collection list, it'll close,
  handleClickOutside = () => {
    this.setState({ listOpen: false });
  };

  // If collection list is open, it'll close it or vice versa
  toggleList() {
    this.setState((prevState) => ({
      listOpen: !prevState.listOpen,
    }));
  }

  // the case for clicking any item in the collection list
  onListItemClick(id, name) {
    let newCollectionId = this.props.newCollectionId;
    let newCollection = this.state.collection;
    let newOps = this.state.ops;

    // the case for clicking the selected item
    if (id === this.state.collectionId) {
      newCollectionId = -1; // resets the collection id that will be displayed on the list
      newCollection = this.props.collection; // resets collection name to initial
      newOps = this.state.ops.map((item) => {
        // unselects the selected item
        item.selected = false;
        return item;
      });
    }

    // the case for clicking the non-selected item
    else {
      // clicked item is selected
      newOps = this.state.ops.map((item) => {
        item.selected = item.id === id;
        return item;
      });

      // updates the collection name and id
      newCollection = name;
      newCollectionId = id;
    }

    this.setState({
      ops: newOps,
      collection: newCollection,
      collectionId: newCollectionId,
    });

    this.props.itemClicked(newCollectionId);
  }

  listOfSelect = () => {
    const list = this.state.ops.map((item, index) => {
      let selectedClass = "";
      if (item.selected) {
        selectedClass = "selected-item"; // change className if the item is selected
      }
      return (
        <li
          className={"col-name list-item" + ` ${selectedClass}`}
          key={item.id}
          value={item.id}
          onClick={() => this.onListItemClick(item.id, item.name)}
        >
          {item.name}
        </li>
      );
    });

    return <ul className="list">{list}</ul>;
  };

  render() {
    return (
      <div className={"wrapper"}>
        <div className="shadow-div"></div>
        <div
          className={
            "col-name header-title" +
            (this.state.collectionId === -1 ? ` faded` : ``) +
            (this.state.listOpen ? " list-open" : "")
          }
          onClick={() => this.toggleList()}
        >
          {this.state.collection}
          <img className={"header-title-icon"} src={Drop} alt="downarrow" />
        </div>

        {this.state.listOpen && this.listOfSelect()}
      </div>
    );
  }
}

export default onClickOutside(List);
