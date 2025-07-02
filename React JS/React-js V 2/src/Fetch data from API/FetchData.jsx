import axios from 'axios';
import { useEffect, useState } from 'react'

const FetchData = () => {
    const [isLoading,setLoading]=useState(true)
    const [isError,setError]=useState(false)
    const url="https://api.github.com/user";
    const [user,setUser]=useState([]);
    useEffect(()=>{
        const fetchData=async ()=>{
            try{
                const response=await axios(url);
                const data=response.data
                setUser(data) 
                // const data=await response.json();
            }catch(error){
                setError(true)
                console.log(error)
            }
            setLoading(false)
        }
        fetchData()
    },[])
    if(isLoading){
        return <h3>Loading.....</h3>
    }
    if(isError){
        return <h4>something wrong ......</h4>
    }
  return (
    <div>
      {user.map((user)=>{
        const {avatar_url,id,login,html_url}=user;
        return (
            <article key={id}>
                <img src={avatar_url} alt="" />
                <h2>{login}</h2>
                <a href={html_url}>Profile</a>
            </article>
        )
      })}
    </div>
  )
}

export default FetchData
