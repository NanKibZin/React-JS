import useHook from "./Hook";

const url="https://api.github.com/users";
const Hook = () => {
   const {isError,isLoading,data}=useHook(url)
    if(isLoading){
        return <h3>Loading.....</h3>
    }
    if(isError){
        return <h4>something wrong ......</h4>
    }
  return (
    <div>
      {data.map((user)=>{
        const {avatar_url,id,login,html_url}=user;
        return (
            <article key={id}>
                <img src={avatar_url} alt="" />
                <h2>{login}</h2>
                <a href={html_url}>Profile</a>
            </article>
        )
      })}
    </div>
  )
}

export default Hook
