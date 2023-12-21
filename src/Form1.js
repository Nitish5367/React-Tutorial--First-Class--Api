import {useState} from "react"
import './Form1.css'
let Form1=()=>{
    let [data,setData]=useState("")
    let fun=(event)=>{
     setData(event.target.value)
    }
    let cler=()=>{
        setData("")
    }
    return(
        <div >
            <input type="text" onChange={fun} value={data}/>
            <button onClick={cler}>Clear</button>
            <div>{data}</div>
        </div>
    )
}
export default Form1