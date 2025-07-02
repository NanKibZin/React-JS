import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Validatio from './LoginValidation'
const Login = () => {
    const [values,setValues]=useState({
        email:"",
        password:""
    })
    const navigate=useNavigate()
    const [errors,setErrors]=useState({})
    const handleInput=(e)=>{
        setValues(prev=>({...prev,[e.target.name]:e.target.value}))
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        setErrors(Validatio(values))
        if(!errors.email&&!errors.password){
          axios.post("http://localhost:8081/login",values)
          .then(res=>{
            // console.log(res),
            if(res.data==="Success"){
              navigate("/home")
            }else{
              console.log(errors)
               alert("No record existed")
            }
        })
          .catch(err=>console.log(err))
        }
    }
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vw-100 vh-100'>
      <div className='bg-white p-3 rounded'>
        <h2>Sign-in</h2>
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
               <label htmlFor="Email"> <strong>Email</strong></label>  
               <input type="email" placeholder='Input Name' className='form-control rounded-0' name="name"
               onChange={handleInput}
               />
               {errors.email&&<span className='text-danger'>{errors.email}</span>}
            </div>
            <div className='mb-3'>
               <label htmlFor="password"><strong>Password</strong></label>  
               <input name='password' type="password" placeholder='Input Password' className='form-control rounded-0'
                onChange={handleInput}
                />
                {errors.password && <span className='text-danger'>{errors.password}</span>}
            </div>
            <button type='submit' className='btn btn-success w-100 rounded-0'> <strong>Login</strong></button>
             <p>You are agree to aour terms and policies</p>
            <Link to="/signup" className='btn btn-default border w-100 bg-light'>Create Account</Link>
        </form>
      </div>
    </div>
  )
}

export default Login
