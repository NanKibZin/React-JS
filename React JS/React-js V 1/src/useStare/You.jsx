import CardList from "./List"
import data from "../data"
import "./user.css"
import React from "react"
const You = () => {
   const [user,setUser]=React.useState(data)
   const getIdUser=(id)=>{
       const filter=user.filter(function(user){
        if(user.id!==id){
          return user
        }
       })
       setUser(filter)

   }
   
  return (
    <div>
      {user.map((u)=>{
        return <CardList {...u} getId={getIdUser} key={u.id}/>
      })}
      <button onClick={()=>setUser([])}>clear all</button>
      </div>
  )
}

export default You
