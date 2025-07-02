import useToggle from "./CostomHook"

const Costom = () => {
    const [show,toggle]=useToggle(true)
  return (
    <div>
        <h3>{show?<Message/>:null}</h3>
      <button onClick={toggle}>click</button>
    </div>
  )
}
function Message(){
    return <h2>Loading.....</h2>
}

export default Costom
