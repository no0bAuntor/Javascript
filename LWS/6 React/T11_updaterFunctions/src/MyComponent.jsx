import React, { useState } from 'react'

export default function MyComponent() {
  const [count, setCount]=useState(0);

  function increment() {
    setCount(c=>c+1);
    setCount(c=>c+1);
    setCount(c=>c+1);
  };

  function decrement() {
    setCount(c=>c-1);
    setCount(c=>c-1);
    setCount(c=>c-1);
  };

  function reset() {
    setCount(0);
  }

  return(
    <>
    <p>Count: {count}</p>
    <button onClick={increment}>Increment</button>
    <button onClick={reset}>Rest</button>
    <button onClick={decrement}>Decrement</button>
    </>
  )
  
}
