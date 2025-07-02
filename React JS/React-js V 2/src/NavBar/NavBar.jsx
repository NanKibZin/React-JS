import img from "../assets/IMG_20240216_203339.jpg";
import NavLink from "./NavLink";
const NavBar = () => {
  
  return (
      <div>
        <img src={img} alt="" />
        <NavLink/>
      </div>
  );
};

export default NavBar;
