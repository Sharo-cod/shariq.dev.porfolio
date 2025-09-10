import { useState } from 'react';
import './App.css'

function App() {
  
  let [counter , setCounter] = useState(0)
  
  // let counter = 15
  const addValue = () => {
    
    // counter = counter + 1    
    if(counter < 20){
    setCounter(counter + 1)
   }
 }

  const removeValue = ()=>{
    if(counter > 0){
    setCounter(counter - 1)
    }
  }

  return (
    <>
    <h1>Chai Aur React</h1>
    <h2>counter value : {counter}</h2>
    <p>Number Only Goes From 0 To 20</p>
    <button onClick={addValue} >Add Value</button>
    <br />
    <br />
    <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App


