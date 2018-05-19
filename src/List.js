import * as React from 'react';

function List(props) {
  return (
    <React.Fragment>
      <ul>
        {props.tasks.map((task, i) => {
          return (
            <li>
              <span>{task.text}</span>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
}

export default List;
