const Poster=({name,img,price,})=>{
    return (
        <div>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h4>{price}</h4>
        </div>
    )
}
export default Poster