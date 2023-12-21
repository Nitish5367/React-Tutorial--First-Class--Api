import { useEffect,useState } from "react";
let Comdidup=()=>{
    let [c,setC]=useState(0)
    useEffect((c)=>{
      console.log(" c,inc")
    },[])
    let inc=()=>{
        setC((c+1))
    }
    return(<div>
        <div>{c}</div>
        <button onClick={inc}>iinc</button>
    </div>)
}
export default Comdidup