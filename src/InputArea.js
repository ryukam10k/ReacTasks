import * as React from 'react';
import {Input} from 'semantic-ui-react';

function InputArea() {
  return (
    <React.Fragment>
      <Input
        type="text"
        placeholder="input task."
        className="add-input"
        size="large"
        action={{
          color: 'blue',
          content: 'Add',
          onClick: () => {},
        }}
      />
    </React.Fragment>
  );
}

export default InputArea;
