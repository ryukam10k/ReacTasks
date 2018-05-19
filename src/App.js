import React, {Component} from 'react';
import Title from './Title';
import InputArea from './InputArea';
import List from './List';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <InputArea />
        <List />
      </div>
    );
  }
}

export default App;
