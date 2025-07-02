// import { useState,useContext } from "react";
import logo from "../assets/IMG_20221106_152630.jpg";
import NavLink from "./NavLink"
// import { createContext } from "react";
// const navContext=createContext()
// export const useNavContext =()=> useContext(navContext);
const NavBar = () => {
  // const [user,setUser]=  useState({name:"Meng"})
  // function signout(){
    // setUser(null)
  
  return (
    // <navContext.Provider value={{user,signout}}>
    <nav> 
      <img src={logo} alt="" />
      <NavLink/>
    </nav>
    // </navContext.Provider>
  );
};

export default NavBar;
