import { useReducer} from "react";
import data from "../data";
const initialState={
    user:data,
    isLogin:true,
  }

function reducer(state,action){
  if(action.type==="CLEAR_LIST"){
    
    return {...state,user:[]};
  }
  if(action.type==="RESET"){
    return {...state,user:data}
  }
  if(action.type==="REMOVE"){
    const filterRemover = state.user.filter((m) => m.id !== action.id);
    return {...state,user:filterRemover}
  }
  throw new Error(`Can't find ${action.type}`)
}
const UserSetup = () => {
  const [state,dispatch]=useReducer(reducer,initialState);
  console.log(state)
  // const [user, setUser] = useState(data);
  console.log(data);
  function handleRemove(id) {
    dispatch({type:"REMOVE",id})
    // const filterRemover = user.filter((m) => m.id !== id);
    // setUser(filterRemover);
  }
  function handleClick() {
    dispatch({type:"CLEAR_LIST"})
    // setUser([]);
  }
  function handleSetup() {
    dispatch({type:"RESET"})
    // setUser(data);
  }
  return (
    <div>
      {state.user.map(({ p1, name, id, age }) => (
        <article key={id}>
          <img src={p1} alt="" />
          <h3>{name}</h3>
          <h5>{age}</h5>
          <button onClick={() => handleRemove(id)}>Remove</button>
        </article>
      ))}
      {state.user.length == 0 ? (
        <button onClick={handleSetup}>Set Up</button>
      ) : (
        <button onClick={handleClick}>Remove</button>
      )}
    </div>
  );
};

export default UserSetup;
