import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [countvalue,setcountvalue]=useState(0);

  //let countvalue=34
  const increase=()=>{
    //countvalue=countvalue+1
    if(countvalue<=19 && countvalue>=0){
      //setcountvalue(countvalue+1)
      
      //suppose we want to increase the value of countvalue by 4
      setcountvalue((prev)=>prev+1)
      /*setcountvalue((prev)=>prev+1)
      setcountvalue((prev)=>prev+1)
      setcountvalue((prev)=>prev+1)*/
    }
  }
  const decrease=()=>{
    //countvalue=countvalue-1;
    if(countvalue<=20 && countvalue>=1){
      setcountvalue(countvalue-1)
    }
  }
  return (
    <>
      <h1>This is a Counter</h1>
      <h2>Count: {countvalue}</h2>
      <button onClick={increase}>INCREASE COUNT</button>
      <br></br>
      <br></br>
      <button onClick={decrease}>DECREASE COUNT</button>
    </>
  )
}

export default App