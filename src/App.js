import React, {Component} from 'react';
import storage from 'store';
import Title from './Title';
import InputArea from './InputArea';
import List from './List';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    // ローカルストレージ読み込み
    const tasks = storage.get('tasks');

    this.state = {
      tasks: tasks || [],
      inputText: '',
    };

    this.updateTasks = this.updateTasks.bind(this);
    this.updateInputText = this.updateInputText.bind(this);
  }

  // タスクリストを更新
  updateTasks(tasks) {
    // ローカルストレージに保存
    storage.set('tasks', tasks);

    this.setState({tasks});
  }

  // 入力エリアを更新
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
        <div>
          <List tasks={this.state.tasks} updateTasks={this.updateTasks} />
        </div>
      </div>
    );
  }
}

export default App;
