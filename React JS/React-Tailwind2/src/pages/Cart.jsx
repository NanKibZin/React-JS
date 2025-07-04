
import { useDispatch, useSelector } from 'react-redux'
import EmptyCart from "../assets/Img/—Pngtree—empty shopping cart icon_4436013.png"
import { increaseQuantity, removeFromCart,decreaseQuantity } from '../Redux/cartSlice'
import { useState } from 'react';
import Modal from '../components/Modal';
import ChangeAddress from '../components/ChangeAddress';


const Cart = () => {
    const cart=useSelector(state=>state.cart);
    const dispatch=useDispatch();
    const [address,setAddress]=useState("Kandal Province")
    const [isModelOpen,setIsModelOpen]=useState(false)
  return (
    <div>
      {cart.products.length>0?
      <div className=" container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      <h3 className=" text-2xl font-semibold mb-4">SHOPPING CART</h3>
      <div className=" flex  justify-between space-x-10 mt-8">
        <div className=" md:w-2/3">
          <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
            <p>PRODUCT</p>
            <div className=" flex space-x-8">
              <p>PRICE</p>
              <p>QUANTITY</p>
              <p>SUBTOTAL</p>
              <p>REMOVE</p>
            </div>
          </div>
          {cart.products.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between p-3 border-b"
            >
              <div className="md:flex items-center space-x-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-contain rounded"
                />
                <div className="flex-1 ml-4">
                  <h3 className="text-lg font-semibold ">{product.name}</h3>
                </div>
              </div>
              <div className="flex space-x-12 items-center">
                <p>${product.price}</p>
                <div className="flex items-center justify-center border">
                  <button className="text-xl font-bold px-1.5 border-r"
                   onClick={()=>dispatch(decreaseQuantity(product.id))}>
                    -
                  </button>
                  <p className="text-xl px-2">{product.quantity}</p>
                  <button className="text-xl px-1 border-1" 
                  onClick={()=>dispatch(increaseQuantity(product.id))}>+</button>
                </div>
                <p>${(product.quantity * product.price).toFixed(2)}</p>
                <button className=" text-red-500 hover:text-red-700"
                onClick={()=>dispatch(removeFromCart(product.id))}>rove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className=" md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-sm font-semibold mb-5">CART TOTAL</h3>
            <div className="flex justify-between mb-5 border-b pb-1">
                <span className="text-sm">Total Items:</span>
                <span>{cart.totalQuantity}</span>
            </div>
            <div className=" mb-4 border-b pb-2">
                <p>Shipping:
                </p>
                <p className="ml-2">Shipping to</p>
                    <span className="text-xs font-bold">
                      {address}
                      </span>
                    <button 
                    className="text-blue-500 hover:underline mt-1 ml-2
                    " onClick={()=>setIsModelOpen(true)}>change address</button>
            </div>
            <div className="flex justify-between mb-4">
              <span> Total Price:</span>
              <span>{cart.totalPrice.toFixed(2)}</span>
            </div>
            <div>
              <button className="w-full bg-red-600 text-white py-2 hover:bg-red-800">Proced to checkOut</button>
            </div>
        </div>
      </div>
      
      <Modal 
      isModelOpen={isModelOpen}
      setIsModelOpen={setIsModelOpen}
      >
        <ChangeAddress setAddress={setAddress} setIsModelOpen={setIsModelOpen}/>
      </Modal>
    </div>
      :
      <div className="flex justify-center">
      <div>
        <img src={EmptyCart} alt="" className=" text-red-600 w-80" />
        <div className="flex justify-center flex-col items-center pb-10">
          <h2 className=" text-red-600">Your Cart is empty</h2>
          <p>Add something to make me happy</p>
        </div>
      </div>
    </div>
      }
    </div>
  )
}

export default Cart
