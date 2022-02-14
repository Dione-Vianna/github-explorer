import React, { useState } from 'react';

// uso de imutabilidade

// sem imutabilidade
// usuario = ['diego', 'ana', 'joao']
// usuario.push('pedro')

// usando o conceito de imutabilidade
// novoUsuario = [...usuario, 'pedro']

export function Counter() {
  // hook -> gancho
  const [count, setCount] = useState(0);
  function increment() {
    console.log('increment', count);
    setCount(count + 1); // exemplo de imutabilidade
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
