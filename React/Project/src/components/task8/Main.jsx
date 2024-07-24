import React, { useState } from 'react';
import Child1 from '../Child1';
import Child2 from '../Child2';


const Main = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>App Component</h1>
      <Child1 count={count} setCount={setCount} />
      <Child2 count={count} />
    </div>
  );
}

export default Main;
