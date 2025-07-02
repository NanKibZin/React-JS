import  { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
const Student = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8081/")
        .then(res=>setData(res.data))
        .catch(err=>console.log(err))
    })
  return (
    <div className='w-100 vh-100 d-flex justify-content-center align-items-center bg-gradient'>
         <div>
            <Link className='btn btn-danger'>Add++</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Tel</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                   {data.map((d,i)=>(
                     <tr key={i}>
                     <td>{d.Firstname}</td>
                     <td>{d.Tel}</td>
                     <td>{d.Email}</td>
                     <td>
                         <button className='btn btn-primary'>Update</button>
                         <button className='btn btn-dark'>Delete</button>
                     </td>
                 </tr> 
                   ))}
                </tbody>
            </table>
         </div>
    </div>
  )
}

export default Student
