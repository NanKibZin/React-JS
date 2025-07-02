// import { useEffect, useState } from "react";
// // import "bootstrap/dist/css/bootstrap.min.css";
// const App = () => {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("http://localhost:8081/information")
//       .then((res) => res.json())
//       .then((data) => setData(data))
//       .catch((err) => console.log(err));
//   }, []);
//   return (
//     <div>
//       {data.map((d) => {
//         <div key={d.id}>
//           <p>{d.Lastname}</p>
//           <p>{d.Firstname}</p>
//           <p>{d.Email}</p>
//         </div>
// })}
//     </div>
//   );
// };

// export default App;

// // import { useEffect, useState } from 'react'

// // const App = () => {
// //   const [data,setData]=useState([])
// //   useEffect(()=>{
// //       fetch("http://localhost:8081/information")
// //       .then(res=>res.json())
// //       .then(data=>setData(data))
// //       .catch(err=>console.log(err))
// //   },[])
// //   return (
// //     <div>
// //       {data.map(d=>(
// //         <div key={d.id}>
// //         <p>{d.Lastname}</p>
// //         <p>{d.Firstname}</p>
// //         <p >{d.Tel}</p>
// //         </div>
// //       ))}
// //     </div>
// //   )
// // }

// // export default App
import { Route, Routes } from 'react-router-dom'
import Student from './Student'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Student/>}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
