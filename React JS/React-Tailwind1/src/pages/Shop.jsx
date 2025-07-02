import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'

const Shop = () => {
    const products=useSelector(state=>state.product)
  return (
    <div>
       <div className=" py-12 px-4 md:px-16 lg:px-24">
        <h2 className=" mx-auto">Shop</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-10">
          {products?.products?.map(((product)=>(
            <ProductCard key={product.id} product={product}/>
          )))}
        </div>
      </div>
    </div>
  )
}

export default Shop
