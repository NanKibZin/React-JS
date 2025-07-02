import React, { useEffect, useState } from 'react'

const InputText = () => {
    const [value,setValue]=useState("");
    useEffect(()=>{
        console.log("useEffect")
    })
  return (
    <div>
        <h2>{value}</h2>
      <input value={value} type="text" onChange={(e)=>setValue(e.target.value)} />
    </div>
  )
}

export default InputText
