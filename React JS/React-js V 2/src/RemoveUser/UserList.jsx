
const UserList = ({img,name,age,id,getid}) => {
  function handleclick(){
    getid(id)
  }
  return (
    <div>
      <img src={img} alt="" />
      <h3>{name}</h3>
      <h4>{age}</h4>
      <button onClick={handleclick}>Remove</button>
    </div>
  )
}

export default UserList
