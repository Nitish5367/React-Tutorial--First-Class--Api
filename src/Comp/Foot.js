import React from 'react'
import { useEffect,useState } from 'react'
const Foot = () => {
  let [time,setTime]=useState(new Date())
  let fun=()=>{
    setTime(new Date())
  }
  useEffect(()=>{
    setInterval(fun,1000)
  },[])
  return (
    <div className='con2'>
    
    {
      time.toLocaleTimeString()
    }
    </div>
  )
}

export default Foot