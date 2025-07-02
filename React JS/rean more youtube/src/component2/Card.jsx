
import "./Card.css"
function Card(props) {
    const {img,price,text,brand}=props;
  return (
    <article>
      <img src={img} alt="" />
      <h3>{brand}</h3>
      <p>{text}</p>
      <span>{price}</span>
    </article>
  )
}

export default Card;
