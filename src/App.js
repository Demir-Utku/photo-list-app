/* eslint-disable no-labels */
import React, { Component } from 'react';
import axios from 'axios';

import Header from './components/Header/Header';
import Content from './components/Content/Content';
import LoadingIndicator from './components/LoadingIndicator/LoadingIndicator';
import Error from './components/Error/Error';
import './App.css';

const selectOptionList = [
  {
    name: "Nature",
    id: 158642,
    selected: false,
  },
  {
    name: "Wallpapers",
    id: 1610448,
    selected: false,
  },
  {
    name: "Architecture",
    id: 589982,
    selected: false,
  },
  {
    name: "Sports",
    id: 1368807,
    selected: false,
  },
  {
    name: "Travel",
    id: 1785728,
    selected: false,
  },
  {
    name: "Fashion",
    id: 3356576,
    selected: false,
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      req_made: '', // request made
      images: null, // taken images
      query: '', 
      collectionName: 'Collections',
      collection: -1,
      currentPage: 1,
      loading: false,
    };
  }

  onInputChange = (e) => { //query onchange
    this.setState({[e.target.name]: e.target.value})
  }

  itemClicked = (newId) => { //liste item tıklaması eventi
    this.setState({collection: newId});
  }

  onButtonClick = () => {
    this.setState({ req_made: 'inline' }) // Changes the screen from first (no list - just search page) to second (list - search and lists)
    console.log(this.state);
    this.loadImages();
  }

  loadImages = () => { //api isteği yapılır
    this.setState({loading: true}) //starts spinner

    axios.get('https://api.unsplash.com/search/photos?query=' + this.state.query + '&page=' + this.state.currentPage + '&per_page=15&collections=' + this.state.collectionId + '&client_id=oGAB55r3jWyuk5FXcJEV2kbB2DBvVmPfHowiFHHoTn4')
      .then(response => {
        console.log(response);
        this.setState({images: response.data});
        this.setState({loading: false});
      })
      .catch(err => {
        console.error(err);
        <Error /> // Design for an error state if the request is failed
      })
  }

  onNextClick = () => {
    let nextPage = this.state.currentPage + 1;
    this.setState({
      currentPage: nextPage,
    });
    this.loadImages();
  }

  onPrevClick = () => {
    let prevPage = this.state.currentPage - 1;
    this.setState({
      currentPage: prevPage,
    });
    this.loadImages();
  }
  
  render() {
    const result = this.state.loading ?
    <LoadingIndicator loaded={this.state.loading} /> 
    :
    <div className="App">
      <Header
        formdata={{query: this.state.query, collection: this.state.collectionName, collectionId: this.state.collection}}
        inline={this.state.req_made}
        ops={selectOptionList}
        itemClicked={this.itemClicked.bind(this)}
        onInputChange={this.onInputChange.bind(this)}
        onButtonClick={this.onButtonClick.bind(this)}
        selectOptionList={selectOptionList}
      />
      <Content
        req_made={this.state.req_made !== '' ? "block" : "none"} 
        data={this.state.images}
        currentPage={this.state.currentPage}  
        onPrevClick={this.onPrevClick}
        onNextClick={this.onNextClick}
      />
    </div>
    return (
      [result]
    );
  }
}

export default App;
