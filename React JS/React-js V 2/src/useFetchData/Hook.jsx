import axios from 'axios';
import { useEffect, useState } from 'react'

const useHook = (url) => {
    const [isLoading,setLoading]=useState(true)
    const [isError,setError]=useState(false)
    const [data,setData]=useState([]);
    useEffect(()=>{
        const fetchData=async ()=>{
            try{
                const response=await axios(url);
                const data=response.data
                setData(data) 
                // const data=await response.json();
            }catch(error){
                setError(true)
                console.log(error)
            }
            setLoading(false)
        }
        fetchData()
    },)
  return [isLoading,isError,data]
}

export default useHook
