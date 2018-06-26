import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import withDimensions from '../lib';

function range(n) {
  return [...Array(n).keys()]
}

class Box extends Component {
  render() {
    return (
      <div style={{
        flex: '1 1 25%',
        margin: '10px',
        backgroundColor: '#ccc'
      }}>
        <p>width: {this.props.dimensions && this.props.dimensions.width}</p>
        <p>height: {this.props.dimensions && this.props.dimensions.height}</p>
      </div>
    )
  }
}

const BoxWithDimensions = withDimensions(Box)

class App extends Component {
  constructor() {
    super()
    this.state = {
      numOfBoxes: 3
    }
  }

  addBox() {
    this.setState({
      numOfBoxes: this.state.numOfBoxes + 1
    })
  }

  removeBox() {
    this.setState({
      numOfBoxes: this.state.numOfBoxes - 1
    })
  }

  render() {
    return (
      <div>
        <button onClick={() => this.addBox()}>+1 box</button>
        <button onClick={() => this.removeBox()}>-1 box</button>
        <div style={{
          display: 'flex'
        }}>
          {range(this.state.numOfBoxes).map((i) => {
            return <BoxWithDimensions />
          })}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
