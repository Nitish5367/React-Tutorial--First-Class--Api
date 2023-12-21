let Testt=(props)=>{
    let data=props.obj
    return(<div className="card">
        <h1>id:{data.id}</h1>
        <h1>title:{data.title}</h1>
        <p>Price:{data.price}</p>
        <p><b>Description:</b>{data.description}</p>
        <p>Category:{data.category}</p>
        <div className="img"><img src={data.image}/></div>
        <p>Rating:{data.rating.rate}</p>
        <p>RatingCount:{data.rating.count}</p>
        <button>Add Cart</button>

    </div>)
}
export default Testt