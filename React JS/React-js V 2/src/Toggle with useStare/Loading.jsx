import React, { useState } from 'react'

const Loading = () => {
    const [alert,setAlert]=useState(false)
    function handleclick(){
        setAlert(!alert)
    }
  return (
    <div>
        {alert?<Message/> :null}
      <button onClick={handleclick}>Loading....</button>
    </div>
  )
}
function Message(){
    return (
        <div>
            Message
        </div>
    )
}

export default Loading
