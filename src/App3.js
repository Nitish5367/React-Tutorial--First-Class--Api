import Com11 from './Com11'
import './App3.css'
let App3=()=>{
    let data=[{"name":"AAAA","age":"21","marks":90},
             {"name":"BBBB","age":"23","marks":91},
             {"name":"CCCC","age":"24","marks":92},
             {"name":"CCCC","age":"24","marks":93},
             {"name":"CCCC","age":"24","marks":94},
             {"name":"CCCC","age":"24","marks":95}
]
return(
    <div className="con">
        {
            data.map((item)=><Com11 obj={item}/>)
        }
    </div>
)
}
export default App3