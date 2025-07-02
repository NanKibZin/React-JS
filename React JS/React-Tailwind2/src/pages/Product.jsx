import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Product = () => {
    const products=useSelector(state=>state.product.products)
    const {id}=useParams()
    const [product,setProduct]=useState();
    useEffect(()=>{
        const newProduct=products.find(product=>product.id===parseInt(id));
        setProduct(newProduct)
    }, [id,product]);
    if(!product) return <div>Loading...</div>
  return (
    <div className=' container mx-auto py-80 md:px-16 lg:px-24'>
        <div className=' flex flex-col md:flex-row gap-x-16'>
           <div className=' shadow-md flex justify-center'>
                <img src={product.image} alt="" className='h-full'/>
            </div>
            <div className=' shadow-md flex flex-col items-center gap-2'>
                <h2 className=' text-3xl font-semibold mb-2'>{product.name}</h2>
                <p className=' text-xl font-semibold text-gray-800 mb-4'>${product.price}</p>
            </div>
        </div>
    </div>
  )
}

export default Product
