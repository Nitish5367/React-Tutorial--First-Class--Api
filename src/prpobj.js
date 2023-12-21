import Comp2pr from "./Comp2pr"
let App=()=>{
    let data=[{"name":"ABCD","age":21,"marks":90},
    {"name":"xyz","age":22,"marks":95},
    {"name":"qwer","age":25,"marks":80},
    {"name":"BCD","age":26,"marks":70}
]
return(
    <div>
        {
            data.map((item)=><Comp2pr obj={item}/>
            )
        }
    </div>
)
}
export default App