/// element component
import p1 from "../assets/photo_2024-06-07_09-52-38.jpg"
const User = (props) => {
    const {img,name,age,id,getId}=props;
    function handleclick(){
       getId(id)
    }
  return (
   <article>
    <img src={p1} alt="" />
    <h2>{name}</h2>
    <h2>{age}</h2>
    <button onClick={handleclick}>Remove</button>
   </article>
  )
}

export default User
