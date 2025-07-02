// import {useNavContext} from "./NavBar"
import { useGlobleContext } from "../Context";
const User = () => {
  const {user,signout}=useGlobleContext();
    // const {user,signout}=useNavContext()
    // const {user,signout}=useContext(navBarContext)
  return (
    <div>
      {user ? (
        <>
          <h2>User:  {user?.name}</h2>
          <button onClick={signout}>Sign out</button>
        </>
      ) : (
        <button>sign in</button>
      )}
    </div>
  );
};

export default User;
 //we use user?.name to make sure that user acess make it underfind if we don't use ? it our code will error
  // ex:
  // const obj={
  //     address:{
  //         zip:1233;
  //     }
  // }
  // console.log(obj.addr?.zip)  we will can acess element zip although addr write wrong
