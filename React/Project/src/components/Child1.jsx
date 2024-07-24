import React from 'react';

const Child1 = ({ count, setCount }) => {
  return (
    <div>
      <h2>Child 1 Component</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Child1;
