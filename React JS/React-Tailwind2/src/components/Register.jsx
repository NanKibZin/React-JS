import React from 'react'

const Register = ({openLogin}) => {
  return (
    <div>
      <h2 className=' text-2xl font-bold mb-4'>Sign Up</h2>
      <form >
      <div className=' mb-4'>
            <label className=' block text-gray-700' htmlFor="">Name</label>
            <input placeholder='Enter Name' type="text" className=' w-full px-3 py-2 border'/>
        </div>
        <div className=' mb-4'>
            <label className=' block text-gray-700' htmlFor="">Email</label>
            <input placeholder='Enter Email' type="email" className=' w-full px-3 py-2 border'/>
        </div>
        <div className=' mb-4'>
            <label className='block text-gray-700' htmlFor="">Password</label>
            <input className='w-full px-3 py-2 border' type="password" />
        </div>
       
        <div className=' mb-4'>
            <button type='submit' className=' w-full bg-red-600 text-white py-2'>Sign up</button>
        </div>
      </form>
      <div className='text-center'>
        <span className=' text-gray-700'>already have an Account</span>
        <button className=' text-red-800' onClick={openLogin}>Login</button>
      </div>
    </div>
  )
}

export default Register
