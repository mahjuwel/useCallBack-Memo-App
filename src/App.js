import React, {useCallback, useState} from 'react'
import './App.css';
import Message from './components/Message';

const App = () => {
  const [count, setCount]=  useState(0);
  const [toggle, setToggle]=  useState(false);
  console.log("app rendering");
  const onHandleIncrementMsg=useCallback(()=>{
    setCount(count + 1);
  },[count]);
  return (
    <div className="App">
      {toggle? "ON":"OFF"}
      <button onClick={()=>{setToggle(!toggle)}}>Toggle</button>
      <h1>Count: {count}</h1>
      <button onClick={() => {
        setCount((count) => count+1);
      }}>Increment</button>

      <Message messageNumber={count} onHandleIncrement={onHandleIncrementMsg}/>
    </div>
  );
}

export default App;
