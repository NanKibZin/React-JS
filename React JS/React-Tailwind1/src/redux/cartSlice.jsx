import { createSlice } from "@reduxjs/toolkit";
const initialState={
    products:[],
    totalQuantity:0,
    totalPrice:0
}
const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
       addToCart(state,action){
           const newItem=action.payload;
           const itemIndex=state.products.find((item)=>item.id===newItem.id)  // id product that has click 
           if(itemIndex){
            itemIndex.quantity++; //1
            itemIndex.totalPrice+=newItem.price  //1200$
           }else{
            state.products.push({
                id:newItem.id,
                name:newItem.name,
                price:newItem.price,
                quantity:1,
                totalPrice:newItem.price,
                image:newItem.image
            })
          }
          state.totalPrice+=newItem.price
          state.totalQuantity++;
       },
       removeFromCart(state,action){
        const id=action.payload;
        const findItem=state.products.find((item)=>item.id===id)
        if(findItem){
            state.totalPrice-=findItem.totalPrice
            state.totalQuantity-=findItem.quantity
            state.products=state.products.filter(item=>item.id!==id)
        }
       },
       increaseQuantity(state,action){
        const id=action.payload;
        const findItem=state.products.find((item)=>item.id===id)
            if(findItem){
                findItem.quantity++;
                findItem.totalPrice+=findItem.price
                state.totalQuantity++;
                state.totalPrice+=findItem.price
            }
       },
       decreaseQuantity(state,action){
        const id=action.payload;
        const findItem=state.products.find((item)=>item.id===id)
        if(findItem>0){

            if(findItem){
                findItem.quantity--;
                findItem.totalPrice-=findItem.price
                state.totalQuantity--;
                state.totalPrice-=findItem.price
            }
        }
       }
    }
})
export const {addToCart,removeFromCart,increaseQuantity,decreaseQuantity}=cartSlice.actions
// export const {setProducts}=cartSlice.actions;
export default cartSlice.reducer