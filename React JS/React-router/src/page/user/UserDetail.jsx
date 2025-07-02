
import { Link, useLoaderData, useParams } from 'react-router-dom'
import data from '../../data/data'
const UserDetail = () => {
    // const usedetail=useLoaderData();
    // // console.log(usedetail)
    // const {id,name,email}=usedetail;
    // return;
    const {id}=useParams()
    const user=data.find((d)=>d.id.toString()===id)
  return (
    <div>
      <h2>Id User:{user.id}</h2>
      <h2>Name:{user.name}</h2>
      <h2>email:{user.email}</h2>
      <Link to="/user">back</Link>
    </div>
  )
}
// export const detail=async (props)=>{
//   const {id}=props.params;
//   console.log(id)
//     const resp=await fetch("https://jsonplaceholder.typicode.com/users/"+id)
//     if(!resp.ok){
//       throw new Error("Can not find this user ok.....");
//     }
//     return resp.json();
// }

export default UserDetail
