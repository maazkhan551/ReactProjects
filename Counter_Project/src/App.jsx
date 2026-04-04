import './App.css'
import { useState } from 'react';
function App() {
  let [counter,setCounter] = useState(10)
  function addValue(){
    if(counter>=20) setCounter(20)
    else{counter++;
    setCounter(counter)}
  }
  function removeValue(){
    if(counter<=0) setCounter(0)
    else{counter--;
    setCounter(counter)}
  }
  return (
    <>
      <h2>Advanced Counter</h2>
      <h3>Welcome to advance counter where you will update counter</h3>
      <p>Counter: {counter}</p>
      <button onClick={addValue}>Increment</button>
      <button onClick={removeValue}>Decrement</button>
    </>
  )
}

export default App
