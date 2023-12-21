import { useState } from "react";
import './Form3All.css'
let Form3All=()=>{
    let [user,setUser]=useState({"name":"","uid":"","pwd":"","email":"","phno":""})
    let[a,setA]=useState([])
    let fun=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    let add=()=>{
        setA([...a,user])
        setUser({"name":"","uid":"","pwd":"","email":"","phno":""})
        
    }
    
    return(
        <div className="con">
            <div className="sub1">
                <input type="text" placeholder="enter name" onChange={fun} value={user.name} name="name"/>
                <input type="text" placeholder="enter UID" onChange={fun} value={user.uid} name="uid"/>
                <input type="text" placeholder="enter email" onChange={fun} value={user.email} name="email"/>
                <input type="text" placeholder="enter password" onChange={fun} value={user.pwd} name="pwd"/>
                <input type="text" placeholder="enter phno" onChange={fun} value={user.phno} name="phno"/>
                <button onClick={add}>Add</button>
            </div>
            <div className="sub2">
           {a.length>0 && <table border={1}>
                <tr>
                    <th>Name</th>
                    <th>UID</th>
                    <th>Password</th>
                    <th>Email</th>
                    <th>Phno</th>
                    
                </tr>
                {
                a.map((item)=>{
                 return (<tr>
                    <td>{item.name}</td>
                    <td>{item.uid}</td>
                    <td>{item.pwd}</td>
                    <td>{item.email}</td>
                    <td>{item.phno}</td>
                 </tr>)
                })}
           
            </table>}
            </div>
        </div>
    )
}
export default Form3All