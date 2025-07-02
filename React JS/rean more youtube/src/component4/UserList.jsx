/// Parent component
import React from "react"
import User from "./User"
import data from "../data"
console.log(data)
import "./user.css"
const UserList = () => {
    const [user,setUser]=React.useState(data)
    function getIdUser(id){
       const filterPerson=user.filter(function(u){
        if(u.id!==id){
            return u;
        }
       })
       setUser(filterPerson)
    }
    function handleClear(){
        setUser([]);
    }
  return (
    <div className="container">

  {user.map((p)=>(
    <User {...p} getId={getIdUser} key={p.id}/>
  ))}
   <button onClick={handleClear} className="btn">Clear all</button>
    </div>
  )
}

export default UserList
