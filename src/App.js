import React, { Component } from 'react';
import { insertRule } from 'glamor';
import Header from './stories/Header';
import Content from './stories/Content';

insertRule(`body { margin: 0; background-color: #19dd89; font-family: avenir next, avenir, sans-serif }`);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
