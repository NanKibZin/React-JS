import { useDispatch } from "react-redux"
import {addToCart} from "../Redux/cartSlice"
import { Link } from "react-router-dom"
const ProductCart = ({product}) => {
  const dispatch = useDispatch()
  const handleAddToCart=(e,product)=>{
    e.stopPropagation()
    e.preventDefault();
    dispatch(addToCart(product))
    //  alert("you add to cart");
     console.log(product)
  }
  return (
    <Link to={`/product/${product.id}`}>
    
    <div className=" border rounded border-black  p-2">
       <img src={product.image} alt="" />
       <h2>{product.name}</h2>
       <h2 className="p-2">{product.price}</h2>
       <div>

       <span className=" bg-red-300 border border-blue-400 p-1 rounded"
        onClick={(e)=>handleAddToCart(e,product)}
        >Add to cart</span>
        </div>
    </div>
    </Link>
  )
}

export default ProductCart
