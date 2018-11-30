import React, { Component } from 'react';
// import '../App.css';
import { ArticleFormContainer } from "./ArticleFormContainer";
import ArticleListContainer from "./ArticleListContainer";



class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="App-title">Header!</h1>
        </header>
        <ArticleListContainer />
        <div id="mapid"></div>
        <div className="col-md-4 offset-md-1">
          <h2>Add a new article</h2>
          <ArticleFormContainer />
        </div>
      </div>
    );
  }
}

export default App;