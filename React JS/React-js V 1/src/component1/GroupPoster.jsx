import Poster from "./Poster"
const GroupPoster=()=>{
    const shose=[
        {name:"thy sodanan",img:"",price:"12$"},
        {name:"Ny LeangMeng",img:"",price:"92$"},
        {name:"thy sodanan",img:"",price:"45$"},
    ]
    return (
        <div>
            {shose.map((s)=>{
                const {name,price,img}=s;
                return (
                    <Poster name={name} price={price} img={img}/>
                )
            })}
        </div>
    )
}
export default GroupPoster