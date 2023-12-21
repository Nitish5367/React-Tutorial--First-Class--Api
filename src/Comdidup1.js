import { useEffect,useState } from "react";
let Comdidup1=()=>{
    let [c,setC]=useState(0)
    let [c1,setC1]=useState(0)
    useEffect((c)=>{
      console.log(" c,inc")
    },[c])
    useEffect((c1)=>{
        console.log(" c inc")
    },[c1])
    let inc=()=>{
        setC((c+1))
    }
    let inc1=()=>{
        setC1((c1+1))
    }
    return(<div>
        <div>{c}</div>
        <button onClick={inc}>iinc</button>
        <div>{c1}</div>
        <button onClick={inc1}>iinc</button>
    </div>)
}
export default Comdidup1