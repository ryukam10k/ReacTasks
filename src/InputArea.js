import * as React from 'react';
import {Input} from 'semantic-ui-react';

function InputArea(props) {
  return (
    <React.Fragment>
      <Input
        type="text"
        placeholder="input task."
        className="add-input"
        size="large"
        value={props.inputText}
        onChange={event => {
          const value = event.target.value;
          props.updateInputText(value);
        }}
        action={{
          color: 'blue',
          content: 'Add',
          onClick: () => {
            // 新タスク
            const newTask = {
              done: false,
              text: props.inputText,
            };

            // タスクリストに新タスクを追加
            const newTasks = [...props.tasks, newTask];
            props.updateTasks(newTasks);

            // 入力エリアを空にする
            props.updateInputText('');
          },
        }}
      />
    </React.Fragment>
  );
}

export default InputArea;
