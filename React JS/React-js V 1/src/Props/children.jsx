const Children = ({name,id,position,getId})=> {
    function handleClick(){
        getId(id)
    }
  return (
    <div>
      <h3>{name}</h3>
      <h4>{position}</h4>
      <button onClick={handleClick}>click</button>
    </div>
  )
}
export default Children