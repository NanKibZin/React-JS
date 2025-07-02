import { Link,useLoaderData} from "react-router-dom";
import data from "../../data/data"
const User = () => {
  // console.log(data)
  // const data = useLoaderData();
  return (
    <div>
     {data.map((d)=>(
      <Link key={d.id} to={d.id.toString()}>{d.name}</Link>
     ))}
    </div>
  );
};
// export const userloader = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   return res.json();
// };
export default User;
