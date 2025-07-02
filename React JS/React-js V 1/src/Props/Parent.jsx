import Children from "./children";

const Parent=()=> {
    const dataUser=[
        {id:1,name:"Nan",position:"IT"},
        {id:2,name:"Sa",position:"IT"},
        {id:3,name:"ra",position:"IT"},
    ]
    function getIdUser(id){
        const g=dataUser.filter( i =>{
            return i.id===id;
        })
        console.log(g)
    }
  return (
    <div>
      {dataUser.map( u =>{
       return <Children {...u} key={u.id} getId={getIdUser}/>
      })}
    </div>
  )
}
export default Parent
