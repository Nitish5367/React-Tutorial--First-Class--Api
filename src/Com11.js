let Com11=(props)=>{
    let data=props.obj
    return(
        <div className="card">
           <h1>Name:{data.name}</h1>
           <h1> Age:{data.age}</h1>
           <h1>Marks:{data.marks}</h1>
        </div>
    )
}
export default Com11