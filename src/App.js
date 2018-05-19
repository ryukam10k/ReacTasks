import React, {Component} from 'react';
import Title from './Title';
import InputArea from './InputArea';
import List from './List';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      inputText: '',
    };

    this.updateTasks = this.updateTasks.bind(this);
    this.updateInputText = this.updateInputText.bind(this);
  }

  updateTasks(tasks) {
    this.setState({tasks});
  }

  updateInputText(value) {
    this.setState({inputText: value});
  }

  render() {
    return (
      <div className="App">
        <Title />
        <InputArea
          inputText={this.state.inputText}
          tasks={this.state.tasks}
          updateInputText={this.updateInputText}
          updateTasks={this.updateTasks}
        />
        <List tasks={this.state.tasks} updateTasks={this.updateTasks} />
      </div>
    );
  }
}

export default App;
