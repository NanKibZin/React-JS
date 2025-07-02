const Profile=(props)=>{   ///child component
    const {name,position,id,getId}=props;
    function handleclick(){
        getId(id)
        console.log(id)
    }
    return (
        <article>
            <h2>{name}</h2>
            <h2>{position}</h2>
            <button onClick={handleclick}>click</button>
        </article>
    )
}
export default Profile;