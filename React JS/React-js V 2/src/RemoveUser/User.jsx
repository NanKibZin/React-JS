import { useState } from 'react'
import UserList from './UserList.jsx'
import data from "../data.js"
const User = () => {
    const [user,setUser]=useState(data)
    const getIdUser=(id)=>{
      const filter=user.filter(function(user){
        if(user.id!==id){
          return user;
        }
      })
      setUser(filter)
        
      }
      return (
        <div>
        {user.map((p)=>{
          return <UserList {...p} getid={getIdUser} key={p.id}/>
        })}
        <button onClick={()=>setUser([])}>Clear</button>
      </div>
  )

}

export default User
