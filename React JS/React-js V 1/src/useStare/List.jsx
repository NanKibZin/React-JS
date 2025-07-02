function List({name,img,age,id,getId}) {
  function handleclick(){
    getId(id)
  }
  return (
    <article>
    <img src={img} alt="" />
    <h2>{name}</h2>
    <h2>{age}</h2>
    <button onClick={handleclick}>Remove</button>
   </article>
  )
}

export default List
