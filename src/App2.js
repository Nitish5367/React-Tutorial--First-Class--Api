import {useState} from 'react'
import './App2.css'
function App2() {
    let [c,setC]=useState(0)
    let inc=()=>{
        setC(Math.round(Math.random(c)*100))
    }
    let dec=()=>{
        setC(c-1)
    } 
    let next=()=>{
        setC(c+1)
    }

  return (
    <div className='con'>

     <h1 className='h1'>{c}</h1>
  
    <div className='sub'>
    <button onClick={inc} >Random</button>
     <button onClick={dec}>Prev</button>
     <button onClick={next}>Next</button>
   
     </div>
    </div>
  )
}

export default App2