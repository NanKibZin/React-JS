import React, { useState } from 'react'

const ChangeAddress = ({setAddress,setIsModelOpen}) => {
    const [newAddress,setNewAddress]=useState("")
    const close=()=>{
        setAddress(newAddress)
        setIsModelOpen(false)
    }
  return (
    <div className=''>
      <input type="text" 
      onChange={(e)=>setNewAddress(e.target.value)}
      className=' border p-2 w-full mb-4' />
      <div className=' flex justify-end'>
        <button
        onClick={()=>setIsModelOpen(false)}
        className=' bg-gray-500 text-white py-2 rounded mr-2'>Cancel</button>
        <button
        onClick={()=>close()}
         className=' bg-blue-500 text-white py-2 rounded'>Save Address</button>
      </div>
    </div>
  )
}

export default ChangeAddress
