import React, { useEffect, useState } from 'react'
import './Home.css'
const Home = () => {
  let a=["https://i.postimg.cc/3RYbFnhv/i1.webp","https://i.postimg.cc/D0gWbfgG/i2.jpg","https://i.postimg.cc/Y2f8x1D6/i3.jpg","https://i.postimg.cc/wjthnJ2b/i4.jpg",
    "https://i.postimg.cc/tRMJwccp/i5.jpg","https://i.postimg.cc/dQbkDXjn/i6.jpg"
]
let [i,setI]=useState(0)
let fun=()=>{
  setI((i)=>(i+1)%6)
}
useEffect(()=>{
  let iid=setInterval(fun,1000)
  return()=>clearInterval(iid)
})
  return (<>
  
  <div className='bnr'>
    <img src={a[i]}/>
  </div>
  
  </>
   
  )
}

export default Home