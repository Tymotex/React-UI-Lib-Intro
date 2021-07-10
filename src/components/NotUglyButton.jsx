import React from 'react';
import { Button } from 'reactstrap';

function hello() {
    alert("I love you, Richard Buckland");
}

const Example = (props) => {
  return (
    <div>
      <Button color="primary" onClick={hello}>primary</Button>{' '}
    </div>
  );
}

export default Example;