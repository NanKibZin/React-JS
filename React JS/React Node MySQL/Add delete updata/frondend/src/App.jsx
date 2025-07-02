// import { useEffect, useState } from 'react'

// const App = () => {
//   const [data,setData]=useState([])
//   useEffect(()=>{
//       fetch("http://localhost:8081/information")
//       .then(res=>res.json())
//       .then(data=>setData(data))
//       .catch(err=>console.log(err))
//   },[])
//   return (
//     <div>
//       {data.map(d=>(
//         <div key={d.id}>
//         <p>{d.Lastname}</p>
//         <p>{d.Firstname}</p>
//         <p >{d.Tel}</p>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default App



// import "./index.css"
// import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Student from './Student'
import "bootstrap/dist/css/bootstrap.min.css"
import CreateStudent from "./CreateStudent"
import Update from "./Update"
const App = () => {
  return (
    <div className='container'>
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Student/>}/>
            <Route path='/create' element={<CreateStudent/>}/>
            <Route path='/update/:id' element={<Update/>}/>
         </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App






















