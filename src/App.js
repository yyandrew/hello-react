import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      header: "Header from state...",
      content: "Content from stats...",
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.header}</h1>
        <h2>{this.state.content}</h2>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div>
        <h1>Header</h1>
      </div>
    )
  }
}

class TableRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.age}</td>
      </tr>
    )
  }

}
export default App;
