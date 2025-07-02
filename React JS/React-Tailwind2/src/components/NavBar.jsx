import { Link } from 'react-router-dom'
import {  FaRegistered, FaShoppingCart, FaUsers} from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Modal from "../components/Modal"
import Login from "../components/Login"
import Register from '../components/Register';

const NavBar = () => {
  const [isModelOpen,setIsModelOpen] =useState(false)
  const [isLogin,setIsLogin]=useState(true)
  const openSignUp=()=>{
    setIsLogin(false)
    setIsModelOpen(true)
  }
  const openLogin=()=>{
    setIsLogin(true)
    setIsModelOpen(true)
  }
  const products=useSelector(state=>state.cart.products)
  return (
    <nav className=' bg-white shadow-md p-4 sticky top-0'>
      
    <div className='container flex justify-between items-center'>
      <div className=' font-bold ml-4'>
        <h2 className=' text-lg'>LA COLLECTION</h2>
      </div>
      <div className='flex gap-5'>
        <Link to="/">Home</Link>
        <Link>Product</Link>
        <Link>About</Link>
        <Link>Contact</Link>
      </div>
      {/* <div className='flex mt-1 space-x-3 ml-14 md:ml-9 border border-gray-500'> */}
      <div className='flex mt-1 space-x-5 ml-14 md:ml-9 '>
        <Link to="/cart" className='flex justify-center items-center rounded border border-gray-500 px-2'>
          <FaShoppingCart className= ''/>
          <h5 >Cart( <span>{products.length>0?products.length:0}</span>)</h5>
        </Link>
        <div className='flex justify-center items-center rounded border border-gray-500 px-2'>
          <FaUsers/>
          <h5 >User</h5>
        </div>
        <div className='flex justify-center items-center rounded border border-gray-500 px-2'>
          <FaRegistered/>
          <h5 onClick={()=>setIsModelOpen(true)}>Register</h5>
        </div>
      </div>
    </div>
    <Modal 
       isModelOpen={isModelOpen} 
        setIsModelOpen={setIsModelOpen}>
         {isLogin ?<Login openSignUp={openSignUp}/>:<Register openLogin={openLogin}/>}
      </Modal>
    </nav>
  )
}

export default NavBar
