import { useState } from "react";
let Form2A=()=>{
    let [data,setData]=useState("")
    let [a,setA]=useState([])
    let fun=(e)=>{
        setData(e.target.value)
    }
    let add=()=>{
        setA([...a,data])
        setData("")
    }
    return(
        <div>
            <input type="text" onChange={fun} value={data}></input>
            <button onClick={add}>Add</button>
            <div>
                {
                    a.map((item)=><li>{item}</li>)
                }
            </div>
        </div>
    )
}
export default Form2A