import React, { useEffect, useState } from 'react'

const ClearEffect = () => {
    const [value,setValue]=useState(false)
  return (
    <div>
        {value&&<Message/>}
       <button onClick={()=>setValue(!value)}>click</button>
    </div>
  )
}
function Message(){
  useEffect(()=>{
    const clearid=setInterval(()=>{
      console.log("useEffect");
    },1000);
    return ()=>{
      clearInterval(clearid)
    }
  },[])
    return <h3>Message....</h3>
}

export default ClearEffect
