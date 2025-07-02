import axios from 'axios';
import { useEffect, useReducer} from 'react'
const defaultValue={
    user:[],
    isLoading:true,
    isError:false,
}
const reducer=(state,action)=>{
    if(action.type==="FETCH"){
        return {...state,user:action.payload}
    }
    if(action.type==="loading"){
        return {...state,isLoading:false}
    }
    if(action.type==="Error"){
        return {...state,isError:true}
    }
}
const Fetch= () => {
    const [state,dispatch]=useReducer(reducer,defaultValue)
    const url="https://api.github.com/users";
    useEffect(()=>{
        const fetchData=async ()=>{
            try{
                const {data}=await axios(url);
                dispatch({type:"FETCH",payload:data})
                // const data=response.data
                // setUser(data) 
                // const data=await response.json();
            }catch(error){
                // setError(true)
                dispatch({type:"Error"})
                console.log(error)
            }
            dispatch({type:"loading"})
            // setLoading(false)
        }
        fetchData()
    },[])
    if(state.isLoading){
        return <h3>Loading.....</h3>
    }
    if(state.isError){
        return <h4>something wrong ......</h4>
    }
  return (
    <div>
      {state.user.map(({avatar_url,id,login,html_url})=>{
        return (
            <article key={id}>
                <img src={avatar_url} alt={login} />
                <h2>{login}</h2>
                <a href={html_url}>Profile</a>
            </article>
        )
      })}
    </div>
  )
}

export default Fetch
