import { Link } from "react-router-dom";

const Service = () => {
  return (
    <div>
      <h3>Service page</h3>
     
      <Link to="/">Back Home</Link>
      <Link to="/about">About Page</Link>
    </div>
  );
};

export default Service;
