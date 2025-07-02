import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { setProducts, setSearchTerm } from "../Redux/productSlice";
import {data} from "../assets/data"
import ProductCart from "../components/ProductCart";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch=useDispatch();
  const [search,setSearch]=useState()
  const products=useSelector(state=>state.product)
  useEffect(()=>{
    dispatch(setProducts(data))
  }, [])
  const navigate=useNavigate()
  const handleSearch=(e)=>{
     e.preventDefault();
     dispatch(setSearchTerm(search))
     navigate('/filter-data')
  }
  return (
    <div className="container">
      <div className=" relative flex-1 mx-4">

      <form onSubmit={handleSearch}>

      <input className=" w-full border py-2 px-4" type="text" onChange={(e)=>setSearch(e.target.value)}/>
      <FaSearch className=" absolute top-3 right-3 text-red-500"></FaSearch>
      </form>
      </div>
      <h2 className=" text-center pt-12  text-2xl mb-5">Product</h2>
      <div className=" ml-20 container sm:grid-cols-3 grid grid-cols-5 gap-4">

         {products?.products?.map(((product)=>(
           <ProductCart key={product.id} product={product}/>
          )))}
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam at iste eaque libero dicta facilis aperiam similique pariatur doloremque explicabo ipsam hic error repudiandae quia sed, incidunt nihil nemo! Iure ut ipsa nesciunt earum nemo ratione ad magni numquam, quaerat corporis quos nihil sequi aliquam, asperiores culpa libero ipsum in doloremque eligendi. Dolor ipsam iste eum asperiores et doloribus cum praesentium! Delectus eum nemo ad vero quae eius consequuntur vitae itaque quos doloremque? Consequatur, illum impedit odio amet quibusdam cupiditate quos deserunt asperiores inventore quaerat, ea voluptas commodi a unde molestias nesciunt fugiat fugit voluptate cumque provident omnis distinctio reprehenderit!</p>
    </div>
  )
}

export default Home
