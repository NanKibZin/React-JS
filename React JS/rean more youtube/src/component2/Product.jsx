
import Card from "./Card"
const Product = () => {
    const shose=[
        {
        id:1,
        img:"https://images.pexels.com/photos/60619/boot-leather-shoe-old-60619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        brand:"iphone",
        text:"injoy your day",
        price:"23$",
        },
        {
            id:2,
        img:"https://images.pexels.com/photos/60619/boot-leather-shoe-old-60619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        brand:"Huewei",
        text:"I hope you like it",
        price:"78$",
        },
        {
            id:3,
        img:"https://images.pexels.com/photos/60619/boot-leather-shoe-old-60619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        brand:"iphone",
        text:"I hope you enjoy it",
        price:"34$",
        },
]

// const filterShose=shose.filter(fs=>{
//     return fs.brand==="iphone"
// })
  return (
    <div>
        
     {shose.map((product)=>{
        
        return <Card {...product} id={product.id} />;
     })}
    </div>
  )
}

export default Product
