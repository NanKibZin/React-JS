import {createSlice} from "@reduxjs/toolkit";
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
            const newItem=action.payload
            const itemIndex=state.products.find((item)=>item.id==newItem.id);
            if(itemIndex){
               itemIndex.quantity++;
               itemIndex.totalPrice+=newItem.price;
            }else{
                state.products.push({
                    id:newItem.id,
                    name:newItem.name,
                    quantity:1,
                    price:newItem.price,
                    totalPrice:newItem.price,
                    image:newItem.image,
                })
            }
            state.totalPrice+=newItem.price;
            state.totalQuantity++
        },
        removeFromCart(state,action){
            const item=action.payload;
            const findItem=state.products.find((i)=>i.id===item.id);
            if(findItem){
                state.totalPrice-=findItem.totalPrice;
                state.totalQuantity-=findItem.totalQuantity;
                state.products=state.products.filter((i)=>i.id!=findItem.id)
            }
        },
        increaseQuantity(state,action){
            const id=action.payload;
            const findItem=state.products.find((i)=>i.id===id);
            if(findItem){
                findItem.quantity++;
                findItem.totalPrice+=findItem.price;
                state.totalQuantity++;
                state.totalPrice+=findItem.price;
            } 
        },
        decreaseQuantity(state,action){
            const id=action.payload;
        const findItem=state.products.find((i)=>i.id===id)
            if(findItem){
                findItem.quantity--;
                findItem.totalPrice-=findItem.price
                state.totalQuantity--;
                state.totalPrice-=findItem.price
            }
        
        }
        
    }

})
export const {addToCart,removeFromCart,increaseQuantity,decreaseQuantity}=cartSlice.actions;
export default cartSlice.reducer