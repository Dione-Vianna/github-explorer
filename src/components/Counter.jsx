import React, { useState } from 'react';
export function Counter() {
  // hook -> gancho
  const [count, setCount] = useState(0);
  function increment() {
    console.log('increment', count);
    setCount(count + 1);
  }
  return (
    <div>
      <h1>Contador</h1>
      <p>
        <strong>{count}</strong>
      </p>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}
