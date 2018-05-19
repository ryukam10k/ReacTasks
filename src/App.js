import React, {Component} from 'react';
import Title from './Title';
import InputArea from './InputArea';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <InputArea />
      </div>
    );
  }
}

export default App;
