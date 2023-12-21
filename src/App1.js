import { useState } from "react"
let App1=()=>{
    let [c,setC]=useState(0)
    let inc=()=>{
        setC(c+1)
    }
    let dec=()=>{
        setC(c-1)
    }
    return(
        <div>

            <h1>{c}</h1>
            <button onClick={dec}>Dec</button>
            <button onClick={inc}>Inc</button>
        </div>
    )
}
export default App1