import { useState } from "react";
let Formtodo=()=>{
  let [data,setData]=useState({"uname":"","task":"","deadline":""})
  let [todo,setTodo]=useState([])
  let [i,setIndex]=useState()
  let [f,setF]=useState(true)
  let[copytodo,setCopy]=useState([])
  let [user,setUser]=useState("")
  let [fn,setFN]=useState("")
  let fun=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  let add=()=>{
    setTodo([...todo,data])
    setData({"uname":"","task":"","deadline":""})
  }
  let del=(index)=>{
    todo.splice(index,1)
    setTodo([...todo])
  }
  let edit=(index)=>{
    setData({...todo [index]})
    setIndex(index)
    setF (false)
  }
  let update=()=>{
     todo[i]=data
     setTodo([...todo])
     setData({"uname":"","task":"","deadline":""})
     setF(true)
  }
  let fun1=(e)=>{
    if(copytodo.length==0){
      setCopy([...todo])
    }
    setUser(e.target.value)
  }
  let search=()=>{
    setTodo(copytodo.filter((item)=>item[fn]==user))
  }
  let clear=()=>{
    setTodo([...copytodo])
  }
  let fun2=(e)=>{
    setFN(e.target.value)
  }
  return(
    <div>
      <div>
        <input type="text" name="uname" value={data.uname} onChange={fun}/>
        <input type="text" name="task" value={data.task} onChange={fun}/>
        <input type="date" name="deadline" value={data.deadline} onChange={fun}/>
       {f&& <button onClick={add}>Add</button>}
        {!f&& <button onClick={update}>update</button>}

      </div>
      <div>
       <select onChange={fun2}>
        <option disabled selected>Select Filter</option>
        <option value="uname">uname</option>
        <option value="task">task</option>
        </select>

        <input type="text" name="uname" onChange={fun1} value={user}/>
        <button onClick={search}>Search</button>
        <button onClick={clear}>ClearFilter</button>
      </div>

      {todo.length>0&&<table border={1}>
        <tr><th>username</th><th>task</th><th>deadline</th></tr>
        {
          todo.map((item,index)=>{
            return(<tr key={index}>
              <td>{item.uname}</td>
              <td>{item.task}</td>
              <td>{item.deadline}</td>
              <td><button onClick={()=>edit(index)}>edit</button></td>
              <td><button onClick={()=>del(index)}>delete</button></td>
            </tr>)
          })
        }
        </table>}
    </div>
  )
}
export default Formtodo