import * as React from 'react';
import {Checkbox} from 'semantic-ui-react';
import classNames from 'classnames';

function List(props) {
  return (
    <React.Fragment>
      {props.tasks.length === 0 ? (
        <p className="no-message">No Tasks.</p>
      ) : (
        <ul>
          {props.tasks.map((task, i) => {
            return (
              <li key={`${task}-${i}`}>
                <span
                  className="task"
                  onClick={() => {
                    const tasks = props.tasks.map((task, index) => {
                      if (i === index) {
                        return {
                          done: !task.done,
                          text: task.text,
                        };
                      }
                      return task;
                    });

                    props.updateTasks(tasks);
                  }}
                >
                  <Checkbox checked={task.done} />
                  <span
                    className={classNames({
                      text: true,
                      done: task.done,
                    })}
                  >
                    {task.text}
                  </span>
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </React.Fragment>
  );
}

export default List;
