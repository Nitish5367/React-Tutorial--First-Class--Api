import React, { useEffect, useState } from 'react'
import './Home.css'
const Home = () => {
    let a=["https://i.postimg.cc/8zhBwgkK/m1.jpg",
          "https://i.postimg.cc/mZzpxDbh/m2.jpg",
          "https://i.postimg.cc/LXzqfLtn/m3.jpg",
          "https://i.postimg.cc/PJ9Bjp7Q/m4.jpg",
          "https://i.postimg.cc/wBxHFJY1/m5.jpg",
          "https://i.postimg.cc/rwmQJFY8/m6.jpg"
]
let [i,setI]=useState(0)
let fun=()=>{
    setI((i)=>
        (i+1)%6
    )
}
useEffect(()=>{
    let iid=setInterval(fun,1000)
    return()=>clearInterval(iid)
},[])
  return (
   <>
   <div className='bnr'>
    <img src={a[i]}/>
   </div>
   </>
  )
}

export default Home