import Profile from "./Profile";    //parent component
const userData=[
    {id:1,name:"thy sodanan",position:"IT"},
    {id:2,name:"Ny leangmend",position:"IT"},
    {id:3,name:"On dara",position:"IT"},
]

function getiduser(id){
    // console.log(id);
    const newUser=userData.find((user)=>user.id===id);
    console.log(newUser)
}

const User=()=>{
    return (
        <div>
            {userData.map((user)=>{
                return <Profile {...user} getId={getiduser} key={user.id}/>
            })}
        </div>
    )
}
export default User;