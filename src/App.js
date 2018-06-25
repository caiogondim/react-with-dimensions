import React, { Component } from 'react';
import withDimensions from './with-dimensions';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          width:{this.props.dimensions && this.props.dimensions.width}<br />
          height:{this.props.dimensions && this.props.dimensions.height}<br />
        </p>
      </div>
    );
  }
}

export default withDimensions(App);
