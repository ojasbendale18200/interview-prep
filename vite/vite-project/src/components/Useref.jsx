import { useState, useRef, useEffect } from 'react';

const  UseRef= () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const increment = () => {
    setCount(count + 1);
    countRef.current = countRef.current + 1;
  };

  const decrement = () => {
    setCount(count - 1);
    countRef.current = countRef.current - 1;
  };

  useEffect(() => {
    console.log("component rendered")
  },[])

  return (
    <div>
      <h1>Counter: {count}</h1>
      <p>Count from useRef: {countRef.current}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default UseRef;
