
import "./Poster.css"
const Poster = ({imge,name,text,children}) => {
  return (
    <article>
      <img src={imge} alt="" />
      <h2>{name}</h2>
      {children}
      <p>{text}</p>
    </article>
  );
};

export default Poster;
