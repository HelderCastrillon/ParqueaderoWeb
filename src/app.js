import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
function App() {
  return (
    <div>
        <Chip
        avatar={<Avatar>MB</Avatar>}
        label="Clickable Chip"
      />
         <Button variant="contained" color="primary">
      Hello World
    </Button>
    </div>
 
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));