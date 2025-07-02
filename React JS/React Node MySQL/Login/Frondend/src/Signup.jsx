import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import Validation from "./SignupValidation"
import { useState } from "react"
const Signup = () => {
    const [values,setValues]=useState({
        name:"",
        email:"",
        password:""
    })
    const navigate=useNavigate()
    const [errors,setErrors]=useState({})
    const handleInput=(e)=>{
        setValues(prev=>({...prev,[e.target.name]:[e.target.value]}))
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        setErrors(Validation(values))
        if(errors.name===""&&errors.email===""&&errors.password===""){
          axios.post("http://localhost:8081/signup",values)
          .then(res=>{
            console.log(res),
            navigate("/")
        })
          .catch(err=>console.log(err))
        }
    }
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vw-100 vh-100'>
      <div className='bg-white p-3 rounded'>
        <h2>Sign-up</h2>
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
               <label htmlFor="Name"> <strong>Name</strong></label>  
               <input name="name" type="name" placeholder='Input Name' className='form-control rounded-0' onChange={handleInput} />
               {errors.name&&<span className='text-danger'>{errors.name}</span>}
            </div>
            <div className='mb-3'>
               <label htmlFor="Email"> <strong>Email</strong></label>  
               <input name="email" type="email" placeholder='Input email' className='form-control rounded-0' onChange={handleInput}/>
               {errors.email&&<span className='text-danger'>{errors.email}</span>}
            </div>
            <div className='mb-3'>
               <label htmlFor="password"><strong>Password</strong></label>  
               <input name="password" type="password" placeholder='Input Password' className='form-control rounded-0' onChange={handleInput} />
               {errors.password&&<span className='text-danger'>{errors.password}</span>}
            </div>
            <button type="submit" className='btn btn-success w-100 rounded-0'> <strong>Sign up </strong></button>
             <p>You are agree to aour terms and policies</p>
            <Link to="/" className='btn btn-default border w-100 bg-light'>Login</Link>
        </form>
      </div>
    </div>
  )
}

export default Signup


