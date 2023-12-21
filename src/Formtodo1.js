import { useState } from "react";
let Formtodo1=()=>{
    let [data,setData]=useState({"uname":"","task":"","deadline":""})
    let [todo,setTodo]=useState([])
    let [i,setIndex]=useState()
    let [f,setF]=useState(true)
    let [copyTodo,setCopy]=useState([])
    let [user,setUser]=useState("")
    let [fn,setFN]=useState("")
    let fun=(e)=>{
        setData({...data,[e.target.name]:e.target.value})

    }
    let add=()=>{
        setTodo([...todo,data])
        setData({"uname":"","task":"","deadline":""})
    }
    let del=(index)=>{   ///index will assign in global variable in js but in react closure wiill used.
       todo.splice(index,1)
       setTodo([...todo])
    }
    let edit=(index)=>{
      setData({...todo [index]})
      setIndex(index)
      setF(false)
    }
    let update=()=>{
        todo[i]=data
        setTodo([...todo])
        setData({"uname":"","task":"","deadline":""})
        setF(true)

    }
    let fun1=(e)=>{
        if(copyTodo.length==0){
            setCopy([...todo])
        }
        setUser(e.target.value)
    }
    let search=()=>{
      setTodo(copyTodo.filter((item)=>item[fn]==user))
    }
    let cler=()=>{
        setTodo([...copyTodo])
    }
    let fun2=(e)=>{
     setFN(e.target.value)
    }
    return(<div>
        <div>
            <input type="text" name="uname" value={data.username} onChange={fun}/>
            <input type="text" name="task" value={data.task} onChange={fun}/>
            <input type="date" name="deadline" value={data.deadline} onChange={fun}/>
           {f&& <button onClick={add}> Add</button>}
           {!f&& <button onClick={update}>Update</button>}
        </div>
        <div>
           <select onChange={fun2}>
            <option disabled selected>Select filter</option>
            <option value="uname">uname</option>
            <option value="task">task</option>

           </select>

            <input type="text" name="uname" value={user} onChange={fun1}/>
            <button onClick={search}>Search</button>
            <button onClick={cler}>ClearFilter</button>
        </div>
       {todo.length>0&& <table border={2}>
        <tr><th>Username</th><th>Task</th><th>Deadline</th></tr>

            {
                todo.map((item,index)=>{
                    return(
                  <tr key={index}>
                      <td>{item.uname}</td>
                    <td>{item.task}</td>
                    <td>{item.deadline}</td>
                    <td><button onClick={()=>edit(index)}>Edit</button></td>
                    <td><button onClick={()=>del(index)}>Delete</button></td>
                    
                  </tr>)
                })
            }
        
        </table>}
    </div>)
}
export default Formtodo1